package com.mindtree.clearbank.registration.service;

import java.util.ArrayList;

import com.mindtree.clearbank.account.entity.Payee;
import com.mindtree.clearbank.account.entity.PayeeData;

public interface PayeeService 
{
	public void addPayee(Payee p);
	public void deletePayee(int accountNumber, String IFSCCode, int customerid);
	public void updatePayee(Payee p);
	public PayeeData getPayeeListByCustomerId(Integer customerId);
}
