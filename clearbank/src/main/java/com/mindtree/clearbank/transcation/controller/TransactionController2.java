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


	@RestController
	public class TransactionController2{
		
		@Autowired
		TransactionService dashBoardService;
		
		@Autowired
		RegistrationService registrationService
		
		@RequestMapping(value = "transaction" , method = RequestMethod.POST)
		public ResponseEntity<?> getTransactionDetails(HttpServeletRequest Request, @RequestBody AccountVo accountVo){
			
			System.out.println("account details are:::: "+accountVo.getAccountnumber()+":::"+accountVo.getAccounttype());
			
			long CustId=accountVo.getId();
			
			User user= registrationservice.findByCustomerId(CustId);
			
			TransactionData transactionData=dashBoardService.getCutsomerTrasactionDetails(CustId, user, accountVo.getAcountnumber(), accountVo.getAccounttype());
			return ResponseEntity.ok(new JwtAuthenticationSuccessResponse(transactionData));
				
		}
		
		@RequestMapping(value="addpayee", method= RequestMethod.POST)
		public ResponseEntity<?> addPayee(@RequestBody CustPayee custPayee ,HttpServletRequest request ){
			HttpSession session=request.getSession();
			String token= (String) session.getAttribute("custtoken");
		}
		
	}