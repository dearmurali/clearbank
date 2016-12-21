/**
 * 
 */
package com.mindtree.clearbank.security.vo;


/**
 * @author M1037185
 *
 */
public class AccountVO {

	private Long id;

	private String customerid;

	private String accountnumber;

	private String accounttype;

	private String accountbalance;

	private String openingdate;

	private String currency;

	private String accountstatus;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomerid() {
		return customerid;
	}

	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}

	public String getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(String accountnumber) {
		this.accountnumber = accountnumber;
	}

	public String getAccounttype() {
		return accounttype;
	}

	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}

	public String getAccountbalance() {
		return accountbalance;
	}

	public void setAccountbalance(String accountbalance) {
		this.accountbalance = accountbalance;
	}

	public String getOpeningdate() {
		return openingdate;
	}

	public void setOpeningdate(String openingdate) {
		this.openingdate = openingdate;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getAccountstatus() {
		return accountstatus;
	}

	public void setAccountstatus(String accountstatus) {
		this.accountstatus = accountstatus;
	}
	
	

}
