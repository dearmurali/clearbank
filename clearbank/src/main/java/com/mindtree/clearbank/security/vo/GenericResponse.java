package com.mindtree.clearbank.security.vo;

import java.io.Serializable;

public class GenericResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private boolean success;

	public GenericResponse(boolean success) {
		this.success = success;
	}

	public boolean isSuccess() {
		return success;
	}

}
