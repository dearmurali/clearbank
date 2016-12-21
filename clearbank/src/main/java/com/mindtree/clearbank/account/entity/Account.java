/**
 * 
 */
package com.mindtree.clearbank.account.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import com.mindtree.clearbank.security.entity.User;



/**
 * @author M1037185
 *
 */
@Entity
@Table(name = "account")
public class Account {
/*
 *  db changes start from here	
 */
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	@Column(name = "customer_id", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
	private Integer customerid;

	@Column(name = "account_number", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
	private Integer accountnumber;
	

	@Column(name = "account_type", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
    private String accounttype ;
	
	@Column(name = "account_balance", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
	private String accountbalance ;
	
	@Column(name = "opening_date", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
	private String openingdate ;
	
	@Column(name = "currency", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
	private String currency ;
	
	@Column(name = "account_status", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
	private String accountstatus;
	
	@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="customerid")
	private User user ;
	
	

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

	public String getOpeningDate() {
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

	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getOpeningdate() {
		return openingdate;
	}

	public Integer getCustomerid() {
		return customerid;
	}

	public void setCustomerid(Integer customerid) {
		this.customerid = customerid;
	}

	
	
	
 
}
