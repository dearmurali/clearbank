package com.mindtree.clearbank.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.clearbank.security.vo.GenericFailResponse;

@ControllerAdvice
@RestController
public class ExceptionHandlerController {

    private final Log logger = LogFactory.getLog(this.getClass());

	@ExceptionHandler(value = Exception.class)
	public GenericFailResponse handleException(Exception e) {
		logger.error("exception:", e);
		return new GenericFailResponse(e.getMessage());
	}
}
