package com.mindtree.clearbank.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.jwt.JwtUserFactory;
import com.mindtree.clearbank.security.repository.UserRepository;

@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String customerid) throws UsernameNotFoundException {
    	User user = userRepository.findByCustomerid(customerid);
        if (user == null) {
            throw new UsernameNotFoundException(
            		String.format("No user found with username '%s'.", customerid));
        } else {
            return JwtUserFactory.create(user);
        }
    }
}
