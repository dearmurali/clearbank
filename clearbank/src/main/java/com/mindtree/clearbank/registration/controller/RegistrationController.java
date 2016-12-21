package com.mindtree.clearbank.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.clearbank.registration.service.RegistrationService;
import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.vo.GenericFailResponse;
import com.mindtree.clearbank.security.vo.GenericResponse;

@RestController
public class RegistrationController {

	@Autowired
	RegistrationService registrationService;

	@RequestMapping(value = "register", method = RequestMethod.POST)
	public GenericResponse register(@RequestBody User user) {

		User customer = registrationService.createUser(user);
		long customerId = customer.getId();

		return new GenericResponse(Boolean.TRUE, String.valueOf(customerId));

	}

	@RequestMapping(value = "modifyUser", method = RequestMethod.PUT)
	public GenericResponse modify(@RequestBody User user) {

		User customer = registrationService.updateUser(user);

		return new GenericResponse(Boolean.TRUE, customer);

	}

	// validate mobile
	@RequestMapping(value = "validate/mobile", method = RequestMethod.POST)
	public GenericResponse validateMobile(@RequestBody User user) {
		user = registrationService.findByMobile(user.getCustomermobile());
		if (null != user && null != user.getId()) {
			return new GenericResponse(Boolean.TRUE);
		} else {
			return new GenericFailResponse("Mobile number does not exist");
		}

	}

	// update password
	@RequestMapping(value = "resetpassword", method = RequestMethod.POST)
	public GenericResponse updatePassword(@RequestBody User user) {
		String password = user.getPassword();
		user = registrationService.findByMobile(user.getCustomermobile());
		if (null != user && null != user.getId()) {
			return new GenericResponse(registrationService.updatePassword(user,
					password));
		} else {
			return new GenericFailResponse("Unable to update password");
		}
	}

}
