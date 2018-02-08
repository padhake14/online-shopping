package com.example.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.example.dao.CategoryDAO;
import com.example.dao.ProductDAO;
import com.example.dto.Category;
import com.example.dto.Product;
import com.example.util.FileUploadUtility;
import com.example.validator.ProductValidator;

@Controller
@RequestMapping("/manage")
public class ManagementController {
	
	@Autowired
	private ProductDAO productDAO;
	
	@Autowired
	private CategoryDAO categoryDAO;	
	
	@RequestMapping(value="/products", method=RequestMethod.GET)
	public ModelAndView ShowManageProducts(@RequestParam(name="operation",required=false)String operation) {		

		ModelAndView mv = new ModelAndView("page");	
		mv.addObject("title","Manage Products");		
		mv.addObject("userClickManageProduct",true);
		Product nProduct = new Product();
		
		// set few field
		
		nProduct.setSupplierId(1);
		nProduct.setActive(true);
		
		mv.addObject("product",nProduct);
		
		if(operation!=null) {
			if(operation.equals("product")) {
				mv.addObject("message","Product submitted sucessfullt");
			}
			else if(operation.equals("category")) {
				mv.addObject("message","Category submitted sucessfullt");

			}
		}
			
		return mv;
		
	}
	
	@RequestMapping(value="{id}/product/", method=RequestMethod.GET)
	public ModelAndView ShowEditProduct(@PathVariable int id) {		

		ModelAndView mv = new ModelAndView("page");	
		mv.addObject("userClickManageProduct",true);
		mv.addObject("title","Manage Products");		
		
		//fetch id from database
		Product nProduct = productDAO.get(id);
		//set the product fetch from database
		mv.addObject("product",nProduct);
			
		return mv;
		
	}
	
	//Handling products submission
	@RequestMapping(value="/products", method=RequestMethod.POST)
	public String handleProductSubmission(@Valid @ModelAttribute("product") Product mProduct,BindingResult results,Model model,HttpServletRequest request) {		
		
		new ProductValidator().validate(mProduct,results);
		
		//check if there are any error
		if(results.hasErrors()) {
			
			model.addAttribute("userClickManageProduct",true);
			model.addAttribute("title","Manage Products");
			model.addAttribute("message","Validation failed for product submission!");
			return "page";
		}
		//create a new product record
		productDAO.add(mProduct);
		
		if(!mProduct.getFile().getOriginalFilename().equals("")) {
			//FileUploadUtility.uploadFile(request, mProduct.getFile(), mProduct.getCode());
			FileUploadUtility.uploadFile(request, mProduct.getFile(), mProduct.getCode());
		}
		
		return "redirect:/manage/products?operation=product"; 
		
	}
	
	@RequestMapping(value="/product/{id}/activation", method=RequestMethod.POST)
	@ResponseBody
	public String handleProductActivation(@PathVariable int id) {
		//is going to fetch from the datbase
		Product product = productDAO.get(id);
		boolean isActive = product.isActive();
		//activating and deactivating based on the active field
		product.setActive(!product.isActive());
		
		//updating the prouct
		productDAO.update(product);
		
		
		return (isActive)? "you have sucessfully deactivated the product based on id" +product.getId() : 
			"you have sucessfully activated the product based on id" +product.getId();
	}

	//to handel catgeory submission
	@RequestMapping(value="/category", method=RequestMethod.POST)
	public String handleCatgeorySubmission(@ModelAttribute Category category) {
		categoryDAO.add(category);
		return "redirect:/manage/products?operation=category"; 
		
	}
	
	
	@ModelAttribute("categories") 
	public List<Category> getCategories() {
		return categoryDAO.list();
	}
	
	@ModelAttribute("category") 
	public Category getCategory() {
		return new Category() ;
	}

}
