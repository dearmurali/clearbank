/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.mindtree.clearbank.security.entity.User;

/**
 * @author M1037185
 *
 */
public class CustAccount {

	

	private Long id;
	
	
	private String customerid;

	private Integer accountnumber;
	
    private String accounttype ;
	
	private String accountbalance ;
	
	private String openingdate ;
	
	private String currency ;
	
	private String accountstatus;
	
	
	private List<CustTranscation>transcation ;

	public Integer getAccountnumber() {
		return accountnumber;
	}

	public void setAccountnumber(Integer accountnumber) {
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

	
	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAccountstatus() {
		return accountstatus;
	}

	public void setAccountstatus(String accountstatus) {
		this.accountstatus = accountstatus;
	}


	public List<CustTranscation> getTranscation() {
		return transcation;
	}

	public void setTranscation(List<CustTranscation> transcation) {
		this.transcation = transcation;
	}

	
	
	
	public String getOpeningdate() {
		return openingdate;
	}

	public void setOpeningdate(String openingdate) {
		this.openingdate = openingdate;
	}

}
