package com.mindtree.clearbank.account.entity;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "PAYEE")
public class Payee 
{

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "name", length = 50)
    @NotNull	
	private String payeeName;
	
	@Column(name = "customerid")
  	private Long customerid;
	
	public Long getCustomerid() {
		return customerid;
	}

	public void setCustomerid(Long customerid) {
		this.customerid = customerid;
	}

	@Column(name = "nick_name", length = 50)
   
	private String payeeNickName;
	
	public String getPayeeNickName() {
		return payeeNickName;
	}

	public void setPayeeNickName(String payeeNickName) {
		this.payeeNickName = payeeNickName;
	}

	@Column(name = "ifsc_Code", length = 50)
	   
	private String payeeIFSC;
	
/*	@Column(name = "transfer_type", length = 2)
	   
	private String transferType;*/
	
	

	public String getPayeeIFSC() {
		return payeeIFSC;
	}

	public void setPayeeIFSC(String payeeIFSC) {
		this.payeeIFSC = payeeIFSC;
	}

	@Column(name = "account_number")
    private long payeeAccountNumber;
	
	@Column(name = "payee_type")
	@NotNull
	private int payeeType;
	
	public int getPayeeType() {
		return payeeType;
	}

	public void setPayeeType(int payeeType) {
		this.payeeType = payeeType;
	}

	@Column(name = "transfer_limit")
	@NotNull
	private double payeeLimit;

    public String getPayeeName ()
    {
        return payeeName;
    }

    public void setPayeeName (String payeeName)
    {
        this.payeeName = payeeName;
    }    

    public long getPayeeAccountNumber ()
    {
        return payeeAccountNumber;
    }

    public void setPayeeAccountNumber (long payeeAccountNumber)
    {
        this.payeeAccountNumber = payeeAccountNumber;
    }

    public double getPayeeLimit ()
    {
        return payeeLimit;
    }

    public void setPayeeLimit (double payeeLimit)
    {
        this.payeeLimit = payeeLimit;
    }
    public String getNickName() {
		return payeeNickName;
	}

	public void setNickName(String nickName) {
		this.payeeNickName = nickName;
	}


}
