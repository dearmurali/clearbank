package com.mindtree.clearbank.security.vo;

import java.io.Serializable;
import java.util.List;

import com.mindtree.clearbank.account.entity.Account;
import com.mindtree.clearbank.account.entity.Customer;
import com.mindtree.clearbank.account.entity.Customer_information;
import com.mindtree.clearbank.account.entity.PayeeData;
import com.mindtree.clearbank.account.entity.TransactionData;
import com.mindtree.clearbank.account.entity.CustPayee;

public class JwtAuthenticationSuccessResponse extends GenericResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private String token;

	
	
	public JwtAuthenticationSuccessResponse(String token) {
		super(Boolean.TRUE);
		this.token = token;
	}
	
	public JwtAuthenticationSuccessResponse(TransactionData transactionData) {
		super(Boolean.TRUE ,transactionData );
		this.token = token;
	}

	
	public JwtAuthenticationSuccessResponse(String token , CustPayee  custPayee) {
		super(Boolean.TRUE ,custPayee );
		this.token = token;
	}

	
	public JwtAuthenticationSuccessResponse(String token , Customer_information customer_information) {
		super(Boolean.TRUE ,customer_information );
		this.token = token;
	}
	
	

	
	public String getToken() {
		return token;
	}

		
	

}
