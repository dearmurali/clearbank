/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class Accounts
{
    private String account_number;

    private String customer_branch;

    private String opening_date;

    private String account_status;

    private String currency;

    private String available_balance;

    private String account_type;

    public String getAccount_number ()
    {
        return account_number;
    }

    public void setAccount_number (String account_number)
    {
        this.account_number = account_number;
    }

    public String getCustomer_branch ()
    {
        return customer_branch;
    }

    public void setCustomer_branch (String customer_branch)
    {
        this.customer_branch = customer_branch;
    }

    public String getOpening_date ()
    {
        return opening_date;
    }

    public void setOpening_date (String opening_date)
    {
        this.opening_date = opening_date;
    }

    public String getAccount_status ()
    {
        return account_status;
    }

    public void setAccount_status (String account_status)
    {
        this.account_status = account_status;
    }

    public String getCurrency ()
    {
        return currency;
    }

    public void setCurrency (String currency)
    {
        this.currency = currency;
    }

    public String getAvailable_balance ()
    {
        return available_balance;
    }

    public void setAvailable_balance (String available_balance)
    {
        this.available_balance = available_balance;
    }

    public String getAccount_type ()
    {
        return account_type;
    }

    public void setAccount_type (String account_type)
    {
        this.account_type = account_type;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [account_number = "+account_number+", customer_branch = "+customer_branch+", opening_date = "+opening_date+", account_status = "+account_status+", currency = "+currency+", available_balance = "+available_balance+", account_type = "+account_type+"]";
    }
}
			
	

			
	