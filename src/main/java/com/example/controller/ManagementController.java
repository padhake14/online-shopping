package com.example.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.example.dao.CategoryDAO;
import com.example.dao.ProductDAO;
import com.example.dto.Category;
import com.example.dto.Product;

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
		}
			
		return mv;
		
	}
	
	//Handling products submission
	@RequestMapping(value="/products", method=RequestMethod.POST)
	public String handleProductSubmission(@Valid @ModelAttribute("product") Product mproduct,BindingResult results,Model model) {		
		//check if there are any error
		if(results.hasErrors()) {
			
			model.addAttribute("userClickManageProduct",true);
			model.addAttribute("title","Manage Products");
			model.addAttribute("message","Validation failed for product submission!");
			return "page";
		}
		
		
		
		//create a new product record
		productDAO.add(mproduct);
		return "redirect:/manage/products?operation=product"; 
		
	}
	
	@ModelAttribute("categories") 
	public List<Category> getCategories() {
		return categoryDAO.list();
	}

}
