/**
 * 
 */
package com.mindtree.clearbank.account.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author M1037185
 *
 */
public class CustTranscation {

	private Long id;

	private String date;

	private String transactionnumber;

	private String refrence;

	private String type;

	private String amount;

	private String finalAmount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTransactionnumber() {
		return transactionnumber;
	}

	public void setTransactionNumber(String transactionnumber) {
		this.transactionnumber = transactionnumber;
	}

	public String getRefrence() {
		return refrence;
	}

	public void setRefrence(String refrence) {
		this.refrence = refrence;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getFinalAmount() {
		return finalAmount;
	}

	public void setFinalAmount(String finalAmount) {
		this.finalAmount = finalAmount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

}
