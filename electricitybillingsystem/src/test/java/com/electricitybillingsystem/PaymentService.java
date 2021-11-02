package com.electricitybillingsystem;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cg.electricitybilling.exception.CustomerNotFoundException;
import com.cg.electricitybilling.service.ITransactionService;

public class PaymentService {
	@Autowired
	ITransactionService tser;
	@Test
	void viewPaymentBycustomerIdTest() {
		String cid = "yagyesh@12";
		assertThat(tser.viewbycustomerid(cid)).isNotNull();

	}

	
	@Test
	@ExceptionHandler(CustomerNotFoundException.class)
	void viewPaymentBycustomerIdFail() {
		String customerId="yagyesh";
		assertThrows(CustomerNotFoundException.class, () -> {
			tser.viewbycustomerid(customerId);
		});

	}
	
}
