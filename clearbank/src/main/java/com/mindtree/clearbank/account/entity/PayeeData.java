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
    private Long csId;

    private List<Payee> payee;

    public Long getCsId ()
    {
        return csId;
    }

    public void setCsId (Long csId)
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
			
	
