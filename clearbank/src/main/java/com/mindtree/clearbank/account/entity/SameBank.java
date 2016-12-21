/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class SameBank
{
    private String payeeName;

    private String payeeAccountNumber;

    private String payeeLimit;

    public String getPayeeName ()
    {
        return payeeName;
    }

    public void setPayeeName (String payeeName)
    {
        this.payeeName = payeeName;
    }

    public String getPayeeAccountNumber ()
    {
        return payeeAccountNumber;
    }

    public void setPayeeAccountNumber (String payeeAccountNumber)
    {
        this.payeeAccountNumber = payeeAccountNumber;
    }

    public String getPayeeLimit ()
    {
        return payeeLimit;
    }

    public void setPayeeLimit (String payeeLimit)
    {
        this.payeeLimit = payeeLimit;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [payeeName = "+payeeName+", payeeAccountNumber = "+payeeAccountNumber+", payeeLimit = "+payeeLimit+"]";
    }
}
