package com.example.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.example.dto.Product;

public class ProductValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {

		return Product.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors error) {

		Product product = (Product) target;

		// wheter file has been selected or not

		if (product.getFile() == null || product.getFile().getOriginalFilename().equals("")) {
			error.rejectValue("file", null, "please select an image file to upload!");
			return;
		}

		if (!(product.getFile().getContentType().equals("image/jpeg")
				|| product.getFile().getContentType().equals("image/png")
				|| product.getFile().getContentType().equals("image/gif")

		)) {
			error.rejectValue("file", null,"please use image file for upload");
			return;
		}
	}

}
