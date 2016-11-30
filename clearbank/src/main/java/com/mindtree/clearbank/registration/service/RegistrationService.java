package com.mindtree.clearbank.registration.service;

import com.mindtree.clearbank.security.entity.User;

public interface RegistrationService {

	public User createUser(User user);	
	public User findByMobile(Long mobile);
	public boolean updatePassword(User user, String password);
	
}
