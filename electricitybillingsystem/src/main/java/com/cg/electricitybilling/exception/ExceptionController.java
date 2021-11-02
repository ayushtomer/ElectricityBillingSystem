package com.cg.electricitybilling.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;


@org.springframework.web.bind.annotation.ControllerAdvice
public class ExceptionController {


	@ExceptionHandler(value = {CustomerNotFoundException.class})
	protected ResponseEntity<ErrorInfo> handleConnectionException(Exception ex) {
		ErrorInfo error= new ErrorInfo(ex.getMessage());
		return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
	

	
}
