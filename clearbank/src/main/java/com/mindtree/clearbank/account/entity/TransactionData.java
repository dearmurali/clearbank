/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import java.util.List;

/**
 * @author M1037185
 *
 */
public class TransactionData
{
    private long csId;

    private List<AccountInfo> accountInfo;

    public long getCsId ()
    {
        return csId;
    }

    public void setCsId (long csId)
    {
        this.csId = csId;
    }

    

    public List<AccountInfo> getAccountInfo() {
		return accountInfo;
	}

	public void setAccountInfo(List<AccountInfo> accountInfo) {
		this.accountInfo = accountInfo;
	}

	@Override
    public String toString()
    {
        return "ClassPojo [csId = "+csId+", accountInfo = "+accountInfo+"]";
    }
}
			
		
