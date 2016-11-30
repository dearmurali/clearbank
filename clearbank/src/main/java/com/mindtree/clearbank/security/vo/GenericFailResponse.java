package com.mindtree.clearbank.security.vo;

import java.io.Serializable;

public class GenericFailResponse extends GenericResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private String error;

	public GenericFailResponse(String error) {
		super(Boolean.FALSE);
		this.error = error;
	}

	public String getError() {
		return error;
	}

}
