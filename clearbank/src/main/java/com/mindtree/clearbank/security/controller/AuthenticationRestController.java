package com.mindtree.clearbank.security.controller;

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

import com.mindtree.clearbank.security.jwt.JwtTokenUtil;
import com.mindtree.clearbank.security.vo.JwtAuthenticationRequest;
import com.mindtree.clearbank.security.vo.JwtAuthenticationSuccessResponse;

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

    @RequestMapping(value = "${jwt.route.authentication.path}", 
    				method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(
    		@RequestBody JwtAuthenticationRequest authenticationRequest, 
    		Device device) throws AuthenticationException {
        final Authentication authentication = 
        		authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(
	                        authenticationRequest.getUsername(),
	                        authenticationRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        final UserDetails userDetails = 
        		userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails, device);
        return ResponseEntity.ok(new JwtAuthenticationSuccessResponse(token));
    }

}
