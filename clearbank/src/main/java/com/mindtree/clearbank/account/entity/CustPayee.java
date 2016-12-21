/**
 * 
 */
package com.mindtree.clearbank.account.entity;

/**
 * @author M1037185
 *
 */
public class CustPayee {

	private String customer_Id;

    private AddPayee addPayee;

    public String getCustomer_Id ()
    {
        return customer_Id;
    }

    public void setCustomer_Id (String customer_Id)
    {
        this.customer_Id = customer_Id;
    }

    public AddPayee getAddPayee ()
    {
        return addPayee;
    }

    public void setAddPayee (AddPayee addPayee)
    {
        this.addPayee = addPayee;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [customer_Id = "+customer_Id+", addPayee = "+addPayee+"]";
    }
}
