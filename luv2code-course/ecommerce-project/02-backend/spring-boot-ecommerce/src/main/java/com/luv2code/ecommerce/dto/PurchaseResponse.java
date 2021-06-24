package com.luv2code.ecommerce.dto;

import lombok.Data;

/**
 * 
 * Use this class to send Java object back as JSON
 *
 */
@Data
public class PurchaseResponse {

	private final String orderTrackingNumber;
	
}
