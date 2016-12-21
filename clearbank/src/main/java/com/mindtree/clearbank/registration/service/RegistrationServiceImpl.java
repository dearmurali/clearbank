package com.mindtree.clearbank.registration.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mindtree.clearbank.security.entity.Authority;
import com.mindtree.clearbank.security.entity.AuthorityName;
import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.repository.UserRepository;

@Service
public class RegistrationServiceImpl implements RegistrationService{

	@Autowired
    private UserRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	@Transactional
	public User createUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setEnabled(Boolean.TRUE);
		user.setActivationdate(new Date());
		List<Authority> authorities = new ArrayList<>();
		Authority authority = new Authority();
		authority.setName(AuthorityName.ROLE_USER);
		authorities.add(authority);
		user.setAuthorities(authorities);
		return userRepository.save(user);
	}

	@Override
	public User findByMobile(Long mobile) {
		return userRepository.findByCustomermobile(mobile);
	}

	@Override
	@Transactional
	public boolean updatePassword(User user, String password) {
		user.setPassword(passwordEncoder.encode(password));
		userRepository.save(user);
		return Boolean.TRUE;
	}

	@Override
	public User findByCustomerId(long customerId) {
		
		return userRepository.findById(customerId);
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		
		User existingUser=userRepository.findById(user.getId());
	    existingUser.setCustomermobile(user.getCustomermobile());
		existingUser.setCustomeremail(user.getCustomeremail());
		existingUser.setCustomeraddress(user.getCustomeraddress());
		userRepository.save(existingUser);
		
		
		return existingUser;
	}
	
}
