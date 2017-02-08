package com.mindtree.clearbank.registration.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.clearbank.account.entity.Payee;
import com.mindtree.clearbank.account.entity.PayeeData;
import com.mindtree.clearbank.registration.service.PayeeService;
import com.mindtree.clearbank.security.vo.GenericFailResponse;
import com.mindtree.clearbank.security.vo.GenericResponse;


@RestController
public class PayeeController
{
	@Autowired
	PayeeService payeeService;
	
	@RequestMapping(value = "addPayee", method = RequestMethod.POST)
	public GenericResponse addPayee(@RequestBody Payee payee) {

		try
		{
		payeeService.addPayee(payee);
		
		return new GenericResponse(Boolean.TRUE, String.valueOf(payee.getPayeeName()));
	}
	catch(Exception e)
	{
		return new GenericFailResponse("Unable to add Payee");
	}

	}
	
@RequestMapping(value = "deletePayee", method = RequestMethod.POST)
	public GenericResponse deletePayee(@RequestBody Payee payee) {
	
	String IFSCCode =payee.getPayeeIFSC();
	int accountNumber = payee.getPayeeAccountNumber();
	int customerid = payee.getCustomerid();
	
	try
	{
		payeeService.deletePayee(accountNumber, IFSCCode, customerid);
	
			
	return new GenericResponse(Boolean.TRUE, String.valueOf(payee.getPayeeName()));
	}
	catch(Exception e)
	{
		return new GenericFailResponse("Unable to delete Payee");
	}

	}

	@RequestMapping(value = "updatePayee", method = RequestMethod.POST)
	public GenericResponse updatePayee(@RequestBody Payee payee) 
	{
	
		try
		{
			payeeService.updatePayee(payee);
			return new GenericResponse(Boolean.TRUE, String.valueOf(payee.getPayeeName()));
		}
		catch(Exception e)
		{
			return new GenericFailResponse("Unable to update Payee");
		}
	
	}
	
	@RequestMapping(value = "payeeList", method = RequestMethod.GET)
	public GenericResponse getPayeeList(Integer customerId) 
	{
	
		try
		{
			PayeeData payeeData = payeeService.getPayeeListByCustomerId(customerId);
			return new GenericResponse(Boolean.TRUE, payeeData);
		}
		catch(Exception e)
		{
			return new GenericFailResponse("Unable to find payee for given customer");
		}
		
	
	}
}
