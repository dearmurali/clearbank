/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class AddPayee
{
    private String payeeName;

    private String payeeNickName;

    private String payeeIFSC;

    private String payeeAccountNumber;

    public String getPayeeName ()
    {
        return payeeName;
    }

    public void setPayeeName (String payeeName)
    {
        this.payeeName = payeeName;
    }

    public String getPayeeNickName ()
    {
        return payeeNickName;
    }

    public void setPayeeNickName (String payeeNickName)
    {
        this.payeeNickName = payeeNickName;
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

    @Override
    public String toString()
    {
        return "ClassPojo [payeeName = "+payeeName+", payeeNickName = "+payeeNickName+", payeeIFSC = "+payeeIFSC+", payeeAccountNumber = "+payeeAccountNumber+"]";
    }
}