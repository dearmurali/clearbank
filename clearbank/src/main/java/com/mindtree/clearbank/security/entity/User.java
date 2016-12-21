package com.mindtree.clearbank.security.entity;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mindtree.clearbank.account.entity.Account;

@Entity
@Table(name = "USER")
public class User {

	@Id
	@Column(name = "CUSTOMER_ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	
	@Column(name = "CUSTOMER_PASSWORD", length = 100)
	@NotNull
	@Size(min = 4, max = 100)
	private String password;

	@Column(name = "CUSTOMER_NAME", length = 100)
	@NotNull
	@Size(min = 4, max = 100)
	private String customername;

	@Column(name = "CUSTOMER_MOBILE", length = 10, unique = true)
	@NotNull
	private Long customermobile;

	@Column(name = "CUSTOMER_EMAIL", length = 100, unique = true)
	@NotNull
	@Size(min = 4, max = 100)
	private String customeremail;

	@Column(name = "ENABLED")
	@NotNull
	private Boolean enabled;

	@Column(name = "ACTIVATION_DATE")
	@Temporal(TemporalType.TIMESTAMP)
	private Date activationdate;

	@Column(name = "CUSTOMER_ADDRESS", length = 100)
	@Size(min = 4, max = 100)
	private String customeraddress;
	
	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
	@JoinTable(name = "USER_AUTHORITY", joinColumns = {
			@JoinColumn(name = "USER_ID", referencedColumnName = "CUSTOMER_ID") }, inverseJoinColumns = {
					@JoinColumn(name = "AUTHORITY_ID", referencedColumnName = "ID") })
	private List<Authority> authorities;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="user")
	private List<Account> accountList;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCustomername() {
		return customername;
	}

	public void setCustomername(String customername) {
		this.customername = customername;
	}

	public Long getCustomermobile() {
		return customermobile;
	}

	public void setCustomermobile(Long customermobile) {
		this.customermobile = customermobile;
	}

	public String getCustomeremail() {
		return customeremail;
	}

	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public List<Authority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(List<Authority> authorities) {
		this.authorities = authorities;
	}

	public Date getActivationdate() {
		return activationdate;
	}

	public void setActivationdate(Date activationdate) {
		this.activationdate = activationdate;
	}

	public String getCustomeraddress() {
		return customeraddress;
	}

	public void setCustomeraddress(String customeraddress) {
		this.customeraddress = customeraddress;
	}
	
	
	public List<Account> getAccountList() {
		return accountList;
	}

	public void setAccountList(List<Account> accountList) {
		this.accountList = accountList;
	}

	
}