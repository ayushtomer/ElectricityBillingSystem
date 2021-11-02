package com.electricitybillingsystem;


import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.cg.electricitybilling.dao.TransactionDao;
import com.cg.electricitybilling.entity.Transaction;
import com.cg.electricitybilling.exception.CustomerNotFoundException;
import com.cg.electricitybilling.service.ITransactionService;

@RunWith(SpringRunner.class)
class ElectricitybillingsystemApplicationTests {

	
	@SpringBootTest
	class ExamTest {

		@Autowired
		ITransactionService tser;
		
		@Autowired
		 TransactionDao dao;
		
		

		
	

		@Test
	    void viewAllPayments() {

			List<Transaction> transaction = tser.viewallTransactions();
			assertTrue(1 <= transaction.size());
		}
		
	
		


	}
	
	
	
	
	
	
	@Test
	void contextLoads() {
	}

}
