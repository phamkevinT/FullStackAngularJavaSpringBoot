package com.luv2code.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.luv2code.ecommerce.entity.Product;

@CrossOrigin("http://localhost:4200") // Accept calls from web browser scripts for this origin
public interface ProductRepository extends JpaRepository<Product, Long> {

}
