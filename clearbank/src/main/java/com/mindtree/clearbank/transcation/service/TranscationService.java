/**
 * 
 */
package com.mindtree.clearbank.transcation.service;

import java.util.List;

import com.mindtree.clearbank.account.entity.CustPayee;
import com.mindtree.clearbank.account.entity.Customer_information;
import com.mindtree.clearbank.account.entity.PayeeData;
import com.mindtree.clearbank.account.entity.TransactionData;
import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.vo.CustomerVO;

/**
 * @author M1037185
 *
 */
public interface TranscationService {
	
	public Customer_information getCustomerDetails(long customerId , String customerName , String email , Long customerMobile);
	
	public List<CustomerVO> getAccountsByCustomerId(String customerId , User user);
	
	public TransactionData getCustomerTranscationDetails(long customerId , User user , String accountNumber , String accountType);
	
	public PayeeData getPayeeListByCustomerId(long customerId , User user);
	
	public CustPayee addPayee(CustPayee custPayee);
	
	
	

}
