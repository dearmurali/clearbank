package com.mindtree.clearbank.security.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mobile.device.Device;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.clearbank.account.entity.Account;
import com.mindtree.clearbank.account.entity.Customer;
import com.mindtree.clearbank.account.entity.Customer_information;
import com.mindtree.clearbank.account.entity.PayeeData;
import com.mindtree.clearbank.registration.service.RegistrationService;
import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.jwt.JwtTokenUtil;
import com.mindtree.clearbank.security.vo.CustomerVO;
import com.mindtree.clearbank.security.vo.JwtAuthenticationRequest;
import com.mindtree.clearbank.security.vo.JwtAuthenticationSuccessResponse;
import com.mindtree.clearbank.transcation.service.TranscationService;

@RestController
public class AuthenticationRestController {

	@Value("${jwt.header}")
	private String tokenHeader;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	RegistrationService registrationService;

	@Autowired
	TranscationService dashBoardService;

	@RequestMapping(value = "${jwt.route.authentication.path}", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(
			@RequestBody JwtAuthenticationRequest authenticationRequest,
			Device device , HttpServletRequest request) throws AuthenticationException {
		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(
						authenticationRequest.getUsername(),
						authenticationRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails, device);
		String customerId = userDetails.getUsername();
		long id=Long.valueOf(customerId);
		HttpSession customerSession=request.getSession();
		customerSession.setAttribute("custid", id);
		customerSession.setAttribute("custtoken", token);

		User user = registrationService.findByCustomerId(id);

		 Customer_information customer_information = dashBoardService.getCustomerDetails(user.getId() ,user.getCustomername() ,user.getCustomeremail(),user.getCustomermobile() );

//		List<CustomerVO> customerAccounts=dashBoardService.getAccountsByCustomerId(customerId , user);

//		PayeeData payeeData = dashBoardService.getPayeeListByCustomerId(
//				customerId, user);

		return ResponseEntity.ok(new JwtAuthenticationSuccessResponse(token,
				customer_information));
	}

}
