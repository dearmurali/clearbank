package com.mindtree.clearbank.security.vo;

import java.io.Serializable;
import java.util.List;

import com.mindtree.clearbank.account.entity.CustPayee;
import com.mindtree.clearbank.account.entity.Customer;
import com.mindtree.clearbank.account.entity.Customer_information;
import com.mindtree.clearbank.account.entity.PayeeData;
import com.mindtree.clearbank.account.entity.TransactionData;
import com.mindtree.clearbank.security.entity.User;

public class GenericResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private boolean success;
	
	private User user ;

	private Customer_information customer_information;
	
	private TransactionData transactionData ;
	
	private PayeeData payeeData ;
	
	private CustPayee custPayee;
	
	private String customerId ;
	
	public GenericResponse(boolean success , String customerId) {
		this.success = success;
		this.customerId=customerId;
	}
	
	
	public GenericResponse(boolean success , User user) {
		this.success = success;
		this.user=user;
	}
	public GenericResponse(boolean success) {
		this.success = success;
		
	}

	public GenericResponse(boolean success , Customer_information customer_information) {
		this.success = success;
		this.customer_information=customer_information;
	
		
	}
	
	
	public GenericResponse(boolean success , TransactionData  transactionData) {
		this.success = success;
		this.transactionData=transactionData;
	
		
	}
	
	
	public GenericResponse(boolean success , CustPayee custPayee) {
		this.success = success;
		this.custPayee=custPayee;
	}
	public GenericResponse(boolean success , PayeeData  payeeData) {
		this.success = success;
		this.payeeData=payeeData;
	
		
	}

	public boolean isSuccess() {
		return success;
	}

	
	
	
	/*public List<Customer> getCustomerData() {
		return customerData;
	}

	public void setCustomerData(List<Customer> customerData) {
		this.customerData = customerData;
	}
*/
	

	/*public List<CustomerVO> getCustomerData() {
		return customerData;
	}

	public void setCustomerData(List<CustomerVO> customerData) {
		this.customerData = customerData;
	}
*/	
	
	
	public String getCustomerId() {
		return customerId;
	}


	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}


	public TransactionData getTransactionData() {
		return transactionData;
	}

	public void setTransactionData(TransactionData transactionData) {
		this.transactionData = transactionData;
	}

	public PayeeData getPayeeData() {
		return payeeData;
	}

	public void setPayeeData(PayeeData payeeData) {
		this.payeeData = payeeData;
	}

	


	public Customer_information getCustomer_information() {
		return customer_information;
	}


	public void setCustomer_information(Customer_information customer_information) {
		this.customer_information = customer_information;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public CustPayee getCustPayee() {
		return custPayee;
	}


	public void setCustPayee(CustPayee custPayee) {
		this.custPayee = custPayee;
	}

	

	
}
