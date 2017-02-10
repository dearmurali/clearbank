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

		e.printStackTrace();
		return new GenericFailResponse("Unable to add Payee" +e.getMessage());

	}

	}
	
@RequestMapping(value = "deletePayee", method = RequestMethod.POST)
	public GenericResponse deletePayee(@RequestBody Payee payee) {
	
	String IFSCCode =payee.getPayeeIFSC();

	long accountNumber = payee.getPayeeAccountNumber();
	Long customerid = payee.getCustomerid();

	
	try
	{
		payeeService.deletePayee(accountNumber, IFSCCode, customerid);
	
			
	return new GenericResponse(Boolean.TRUE, String.valueOf(payee.getPayeeName()));
	}
	catch(Exception e)
	{

		e.printStackTrace();
		return new GenericFailResponse("Unable to delete Payee" +e.getMessage());

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

			e.printStackTrace();
			return new GenericFailResponse("Unable to update Payee" +e.getMessage());

		}
	
	}
	
	@RequestMapping(value = "payeeList", method = RequestMethod.GET)

	public GenericResponse getPayeeList(Long customerId) 

	{
	
		try
		{
			PayeeData payeeData = payeeService.getPayeeListByCustomerId(customerId);
			return new GenericResponse(Boolean.TRUE, payeeData);
		}
		catch(Exception e)
		{

			e.printStackTrace();
			return new GenericFailResponse("Unable to find Payee list" +e.getMessage());

		}
		
	
	}
}
