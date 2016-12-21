/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import java.util.List;

/**
 * @author M1037185
 *
 */
public class PayeeData
{
    private long csId;

    private List<Payee> payee;

    public long getCsId ()
    {
        return csId;
    }

    public void setCsId (long csId)
    {
        this.csId = csId;
    }

  
  public List<Payee> getPayee() {
		return payee;
	}

	public void setPayee(List<Payee> payee) {
		this.payee = payee;
	}

	@Override
    public String toString()
    {
        return "ClassPojo [csId = "+csId+", payee = "+payee+"]";
    }
}
			
	
