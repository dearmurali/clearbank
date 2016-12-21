/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class Top_payee
{
    private String payeeAccountNumber_1;

    private String payeeName_1;

    public String getPayeeAccountNumber_1 ()
    {
        return payeeAccountNumber_1;
    }

    public void setPayeeAccountNumber_1 (String payeeAccountNumber_1)
    {
        this.payeeAccountNumber_1 = payeeAccountNumber_1;
    }

    public String getPayeeName_1 ()
    {
        return payeeName_1;
    }

    public void setPayeeName_1 (String payeeName_1)
    {
        this.payeeName_1 = payeeName_1;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [payeeAccountNumber_1 = "+payeeAccountNumber_1+", payeeName_1 = "+payeeName_1+"]";
    }
}
		