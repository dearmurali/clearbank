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
		registrationService.createUser(user);
		if (user.getId() != 0) {
			return new GenericResponse(Boolean.TRUE);
		}
		return null;
	}

	// validate mobile
	@RequestMapping(value = "validate/mobile", method = RequestMethod.POST)
	public GenericResponse validateMobile(@RequestBody User user) {
		user = registrationService.findByMobile(user.getCustomermobile());
		if (null != user && null != user.getCustomerid()) {
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
		if (null != user && null != user.getCustomerid()) {
			return new GenericResponse(registrationService.updatePassword(user, password));
		} else {
			return new GenericFailResponse("Unable to update password");
		}
	}
	
}
