/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class Transactions
{
    private String amount;

    private String finalAmaount;

    private String description;

    private String transactionNumber;

    private String type;

    private String date;

    public String getAmount ()
    {
        return amount;
    }

    public void setAmount (String amount)
    {
        this.amount = amount;
    }

    public String getFinalAmaount ()
    {
        return finalAmaount;
    }

    public void setFinalAmaount (String finalAmaount)
    {
        this.finalAmaount = finalAmaount;
    }

    public String getDescription ()
    {
        return description;
    }

    public void setDescription (String description)
    {
        this.description = description;
    }

    public String getTransactionNumber ()
    {
        return transactionNumber;
    }

    public void setTransactionNumber (String transactionNumber)
    {
        this.transactionNumber = transactionNumber;
    }

    public String getType ()
    {
        return type;
    }

    public void setType (String type)
    {
        this.type = type;
    }

    public String getDate ()
    {
        return date;
    }

    public void setDate (String date)
    {
        this.date = date;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [amount = "+amount+", finalAmaount = "+finalAmaount+", description = "+description+", transactionNumber = "+transactionNumber+", type = "+type+", date = "+date+"]";
    }
}
			
			