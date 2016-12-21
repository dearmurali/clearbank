/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import java.util.List;

/**
 * @author M1037185
 *
 */
public class Accounts_information
{
    private List<Accounts> accounts;

    public List<Accounts> getAccounts ()
    {
        return accounts;
    }

    public void setAccounts (List<Accounts> accounts)
    {
        this.accounts = accounts;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [accounts = "+accounts+"]";
    }
}