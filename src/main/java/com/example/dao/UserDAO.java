package com.example.dao;


import java.util.List;

import com.example.dto.Address;
import com.example.dto.Cart;
import com.example.dto.User;

public interface UserDAO {


	boolean addUser(User user);
	User getByEmail(String email);
	
	// adding and updating a new address
	
	boolean addAddress(Address address);
	Address getBillingAddress(User user);
	List<Address> listshippingAddresses(User user);
	
	boolean updateCart(Cart cart);


	
}
