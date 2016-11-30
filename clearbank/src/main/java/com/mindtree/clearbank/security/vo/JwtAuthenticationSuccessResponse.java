package com.mindtree.clearbank.security.vo;

import java.io.Serializable;

public class JwtAuthenticationSuccessResponse extends GenericResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private String token;

	public JwtAuthenticationSuccessResponse(String token) {
		super(Boolean.TRUE);
		this.token = token;
	}

	public String getToken() {
		return token;
	}

}
