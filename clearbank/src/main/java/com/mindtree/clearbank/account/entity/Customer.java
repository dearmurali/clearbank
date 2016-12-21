/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import java.util.List;

/**
 * @author M1037185
 *
 */
public class Customer {

	private long csId;
	
	private String customerName ;
	
	private String email ;
	
	private Long custMobile ;
	
	private List<CustAccount> accountInfo ;
	
	private List<Payee> payeeData ;
	
	private String bankType ;
	
	public String getBankType() {
		return bankType;
	}

	public void setBankType(String bankType) {
		this.bankType = bankType;
	}
	
	
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getCsId() {
		return csId;
	}

	public void setCsId(long csId) {
		this.csId = csId;
	}

	
	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public List<CustAccount> getAccountInfo() {
		return accountInfo;
	}

	public void setAccountInfo(List<CustAccount> accountInfo) {
		this.accountInfo = accountInfo;
	}

	public Long getCustMobile() {
		return custMobile;
	}

	public void setCustMobile(Long custMobile) {
		this.custMobile = custMobile;
	}

	public List<Payee> getPayeeData() {
		return payeeData;
	}

	public void setPayeeData(List<Payee> payeeData) {
		this.payeeData = payeeData;
	}
	
	

}
