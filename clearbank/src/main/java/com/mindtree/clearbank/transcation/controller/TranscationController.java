/**
 * 
 */
package com.mindtree.clearbank.transcation.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.clearbank.account.entity.CustPayee;
import com.mindtree.clearbank.account.entity.TransactionData;
import com.mindtree.clearbank.registration.service.RegistrationService;
import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.vo.AccountVO;
import com.mindtree.clearbank.security.vo.JwtAuthenticationSuccessResponse;
import com.mindtree.clearbank.transcation.service.TranscationService;


/**
 * @author M1037185
 *
 */
@RestController
public class TranscationController {

	@Autowired
	TranscationService dashBoardService;

	@Autowired
	RegistrationService registrationService;

	@RequestMapping(value = "transaction", method = RequestMethod.POST)
	public ResponseEntity<?> getTranscationDetails(HttpServletRequest request , @RequestBody AccountVO accountVO ) {


		System.out.println("account details are " +accountVO.getAccountnumber() + "::::"  +accountVO.getAccounttype() );
		
		long custid=accountVO.getId();
	
     //   long custid = (Long) session.getAttribute("custid");
		
		
		System.out.println("::::::::::::::::::::::::::" + custid);
		User user = registrationService.findByCustomerId(custid);

		TransactionData transactionData = dashBoardService
				.getCustomerTranscationDetails(custid, user ,accountVO.getAccountnumber() , accountVO.getAccounttype() );

		return ResponseEntity.ok(new JwtAuthenticationSuccessResponse(transactionData));
		
	}

	
	

	@RequestMapping(value = "addPayee", method = RequestMethod.POST)
	public ResponseEntity<?> addPayee(@RequestBody CustPayee custPayee , HttpServletRequest request) {

		HttpSession session = request.getSession();
		String token = (String) session.getAttribute("custtoken");
	   CustPayee customerPayee=	dashBoardService.addPayee(custPayee);
		return ResponseEntity.ok(new JwtAuthenticationSuccessResponse(token , customerPayee));

	}
}
