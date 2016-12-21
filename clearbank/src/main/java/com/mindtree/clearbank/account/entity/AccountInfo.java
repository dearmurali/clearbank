/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import java.util.List;

/**
 * @author M1037185
 *
 */
public class AccountInfo
{
    private List<Transactions> transactions;

    private String accountNumber;

    

    public String getAccountNumber ()
    {
        return accountNumber;
    }

    public void setAccountNumber (String accountNumber)
    {
        this.accountNumber = accountNumber;
    }

    
    
    public List<Transactions> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<Transactions> transactions) {
		this.transactions = transactions;
	}

	@Override
    public String toString()
    {
        return "ClassPojo [transactions = "+transactions+", accountNumber = "+accountNumber+"]";
    }
}
