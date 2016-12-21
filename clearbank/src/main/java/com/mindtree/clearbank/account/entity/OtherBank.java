/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class OtherBank
{
    private String payeeName;

    private String payeeIFSC;

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

    public String getPayeeIFSC ()
    {
        return payeeIFSC;
    }

    public void setPayeeIFSC (String payeeIFSC)
    {
        this.payeeIFSC = payeeIFSC;
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
        return "ClassPojo [payeeName = "+payeeName+", payeeIFSC = "+payeeIFSC+", payeeAccountNumber = "+payeeAccountNumber+", payeeLimit = "+payeeLimit+"]";
    }
}
