/**
 * 
 */
package com.mindtree.clearbank.security.vo;

import java.util.List;

import com.mindtree.clearbank.account.entity.Account;

/**
 * @author M1037185
 *
 */
public class CustomerVO {

   private String csId;
	
	private String customerName ;
	
	private String email ;
	
	private Long custMobile ;
	
	private List<AccountVO> accountInfo ;

	public String getCsId() {
		return csId;
	}

	public void setCsId(String csId) {
		this.csId = csId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getCustMobile() {
		return custMobile;
	}

	public void setCustMobile(Long custMobile) {
		this.custMobile = custMobile;
	}

	public List<AccountVO> getAccountInfo() {
		return accountInfo;
	}

	public void setAccountInfo(List<AccountVO> accountInfo) {
		this.accountInfo = accountInfo;
	}
	

}
