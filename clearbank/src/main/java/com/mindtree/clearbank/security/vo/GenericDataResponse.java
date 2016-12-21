/**
 * 
 */
package com.mindtree.clearbank.security.vo;

import java.io.Serializable;
import java.util.List;

import com.mindtree.clearbank.account.entity.Customer;

/**
 * @author M1037185
 *
 */
public class GenericDataResponse  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Customer>customerData ;
	
	
	public GenericDataResponse(List<Customer> customerData){
		this.customerData=customerData;
		
	}
	public List<Customer> getCustomerData() {
		return customerData;
	}

	public void setCustomerData(List<Customer> customerData) {
		this.customerData = customerData;
	}


}
