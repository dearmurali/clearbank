package com.mindtree.clearbank.account.entity;

import java.util.ArrayList;
import java.util.List;

public class Customer_information
{
	private String customer_Id;

    private String customer_Name;

    private String customer_email;

    private String customer_mobileNumber;
    
    private List<Fav_links>fav_links;
    
    private List<Top_payee>top_payee;
    
    private Accounts_information accounts_information;
    
    private Pie_chart pie_chart;

    public String getCustomer_Id ()
    {
        return customer_Id;
    }

    public void setCustomer_Id (String customer_Id)
    {
        this.customer_Id = customer_Id;
    }

    public String getCustomer_Name ()
    {
        return customer_Name;
    }

    public void setCustomer_Name (String customer_Name)
    {
        this.customer_Name = customer_Name;
    }

    public String getCustomer_email ()
    {
        return customer_email;
    }

    public void setCustomer_email (String customer_email)
    {
        this.customer_email = customer_email;
    }

    public String getCustomer_mobileNumber ()
    {
        return customer_mobileNumber;
    }

    public void setCustomer_mobileNumber (String customer_mobileNumber)
    {
        this.customer_mobileNumber = customer_mobileNumber;
    }
    
    

    public List<Fav_links> getFav_links() {
		return fav_links;
	}

	public void setFav_links(List<Fav_links> fav_links) {
		this.fav_links = fav_links;
	}

	public List<Top_payee> getTop_payee() {
		return top_payee;
	}

	public void setTop_payee(List<Top_payee> top_payee) {
		this.top_payee = top_payee;
	}

	public Accounts_information getAccounts_information() {
		return accounts_information;
	}

	public void setAccounts_information(
			Accounts_information accounts_information) {
		this.accounts_information = accounts_information;
	}

	public Pie_chart getPie_chart() {
		return pie_chart;
	}

	public void setPie_chart(Pie_chart pie_chart) {
		this.pie_chart = pie_chart;
	}

	@Override
    public String toString()
    {
        return "ClassPojo [customer_Id = "+customer_Id+", customer_Name = "+customer_Name+", customer_email = "+customer_email+", customer_mobileNumber = "+customer_mobileNumber+"]";
    }
}
			
	