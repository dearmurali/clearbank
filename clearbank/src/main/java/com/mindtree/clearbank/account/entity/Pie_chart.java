/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class Pie_chart
{
    private String savingsAccountBalance;

    private String Loans;

    private String creditCardExpense;

    public String getSavingsAccountBalance ()
    {
        return savingsAccountBalance;
    }

    public void setSavingsAccountBalance (String savingsAccountBalance)
    {
        this.savingsAccountBalance = savingsAccountBalance;
    }

    public String getLoans ()
    {
        return Loans;
    }

    public void setLoans (String Loans)
    {
        this.Loans = Loans;
    }

    public String getCreditCardExpense ()
    {
        return creditCardExpense;
    }

    public void setCreditCardExpense (String creditCardExpense)
    {
        this.creditCardExpense = creditCardExpense;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [savingsAccountBalance = "+savingsAccountBalance+", Loans = "+Loans+", creditCardExpense = "+creditCardExpense+"]";
    }
}
			
		