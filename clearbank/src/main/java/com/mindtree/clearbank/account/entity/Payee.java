/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import java.util.List;

/**
 * @author M1037185
 *
 */
public class Payee
{
 	private List<SameBank> sameBank ;
 	
 	private List<OtherBank>otherBank ;
	
   public List<SameBank> getSameBank() {
		return sameBank;
	}

	public void setSameBank(List<SameBank> sameBank) {
		this.sameBank = sameBank;
	}


	public List<OtherBank> getOtherBank() {
		return otherBank;
	}

	public void setOtherBank(List<OtherBank> otherBank) {
		this.otherBank = otherBank;
	}

	@Override
    public String toString()
    {
        return "ClassPojo [sameBank = "+sameBank+"]";
    }
}