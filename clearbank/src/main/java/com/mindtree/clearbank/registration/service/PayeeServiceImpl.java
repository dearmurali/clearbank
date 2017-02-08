package com.mindtree.clearbank.registration.service;

import java.util.ArrayList;




import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import antlr.collections.List;

import com.mindtree.clearbank.account.entity.OtherBank;
import com.mindtree.clearbank.account.entity.Payee;
import com.mindtree.clearbank.account.entity.PayeeData;
import com.mindtree.clearbank.account.entity.SameBank;
import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.repository.PayeeRepository;

import org.springframework.data.jpa.repository.Query;


@Service
public class PayeeServiceImpl implements PayeeService
{
	@Autowired
    private PayeeRepository payeeRepository;
	
	@SuppressWarnings("unchecked")
	@Override
	@Transactional
	public void addPayee(Payee payee)
	{
		payeeRepository.save(payee);
				
	}
	
   	   public void deletePayee(int accountNumber, String IFSCCode, int customerid)
	    {
   		   if(IFSCCode==null || IFSCCode.equals(""))
   		   {
   			 payeeRepository.deletePayee1(accountNumber,customerid);
   		   }
   		   else
   		   {
   			   payeeRepository.deletePayee(accountNumber, IFSCCode,customerid);
   		   }
	    	
	    }
   	   
   	 public void updatePayee(Payee payee)
	    {
	   		String IFSCCode =payee.getPayeeIFSC();
	   		int accountNumber = payee.getPayeeAccountNumber();
	   		int customerid = payee.getCustomerid();
	   		String nickName = payee.getNickName();
	   		double transferLimit = payee.getPayeeLimit();
	   		
   		
		   if(IFSCCode==null || IFSCCode.equals(""))
		   {
			 payeeRepository.updatePayee1(accountNumber, customerid, nickName, transferLimit);
		   }
		   else
		   {
			   payeeRepository.updatePayee(accountNumber, IFSCCode, customerid, nickName, transferLimit);
		   }
	    	
	    }
   	 
   	 
   	@Override
	public PayeeData getPayeeListByCustomerId(Integer customerId) {
   		
   		System.out.println("customerid#################"+customerId);

   		ArrayList<Payee> payeeList = new ArrayList<Payee>();
   		payeeList= payeeRepository.findByCustomerid(customerId);
   		PayeeData payeeData = new PayeeData();
   		payeeData.setCsId(customerId);
   		payeeData.setPayee(payeeList);
		return payeeData;
	}

	
}
