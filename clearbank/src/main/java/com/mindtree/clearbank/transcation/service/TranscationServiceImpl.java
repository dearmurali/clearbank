/**
 * 
 */
package com.mindtree.clearbank.transcation.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.clearbank.account.entity.Account;
import com.mindtree.clearbank.account.entity.AccountInfo;
import com.mindtree.clearbank.account.entity.Accounts;
import com.mindtree.clearbank.account.entity.Accounts_information;
import com.mindtree.clearbank.account.entity.AddPayee;
import com.mindtree.clearbank.account.entity.CustAccount;
import com.mindtree.clearbank.account.entity.CustPayee;
import com.mindtree.clearbank.account.entity.Customer;
import com.mindtree.clearbank.account.entity.Customer_information;
import com.mindtree.clearbank.account.entity.Fav_links;
import com.mindtree.clearbank.account.entity.OtherBank;
import com.mindtree.clearbank.account.entity.Payee;
import com.mindtree.clearbank.account.entity.PayeeData;
import com.mindtree.clearbank.account.entity.Pie_chart;
import com.mindtree.clearbank.account.entity.SameBank;
import com.mindtree.clearbank.account.entity.Top_payee;
import com.mindtree.clearbank.account.entity.TransactionData;
import com.mindtree.clearbank.account.entity.Transactions;
import com.mindtree.clearbank.security.entity.User;
import com.mindtree.clearbank.security.repository.AccountRepository;
import com.mindtree.clearbank.security.vo.AccountVO;
import com.mindtree.clearbank.security.vo.CustomerVO;

/**
 * @author M1037185
 *
 */
@Service
public class TranscationServiceImpl implements TranscationService {

	@Autowired
	private AccountRepository accountRepository;
	
	@Override
	public Customer_information getCustomerDetails(long customerId,
			String customerName, String email, Long customerMobile) {
		// TODO Auto-generated method stub
		
		Customer_information customer_information=new Customer_information();
		customer_information.setCustomer_Id(String.valueOf(customerId));
		customer_information.setCustomer_Name(customerName);
		customer_information.setCustomer_email(email);
		customer_information.setCustomer_mobileNumber(String.valueOf(customerMobile));
	/*	List<Fav_links> fav_links=new ArrayList<Fav_links>();
		Fav_links fav_link=new Fav_links();
		fav_link.setLabel_1("Transfers");
		fav_link.setLink_url_1("transfers");
		
		Fav_links fav_link1=new Fav_links();
		fav_link1.setLabel_1("Loans");
		fav_link1.setLink_url_1("loans");
		
		Fav_links fav_link2=new Fav_links();
		fav_link2.setLabel_1("Credit Cards");
		fav_link2.setLink_url_1("creditcards");
		
		fav_links.add(fav_link);
		fav_links.add(fav_link1);
		fav_links.add(fav_link2);
		
		customer_information.setFav_links(fav_links);
		
		
		
		List<Top_payee> top_payees=new ArrayList<Top_payee>();
		
		Top_payee top_payee=new Top_payee();
		top_payee.setPayeeAccountNumber_1("678945876543");
		top_payee.setPayeeName_1("Aman Sharma");
		
		Top_payee top_payee1=new Top_payee();
		top_payee1.setPayeeAccountNumber_1("543367876543");
		top_payee1.setPayeeName_1("Nitish Bali");
		
		top_payees.add(top_payee);
		top_payees.add(top_payee1);
		
		customer_information.setTop_payee(top_payees);
		*/
		
		
		Accounts_information accounts_information=new Accounts_information();
		List<Accounts> accounts=new ArrayList<Accounts>();
		Accounts account=new Accounts();
		account.setAccount_number("005463289732");
		account.setAccount_type("Saving");
		account.setAvailable_balance("87512");
		account.setOpening_date("10-03-2014");
		account.setCustomer_branch("INDIA");
		account.setAccount_status("Active");
		account.setCurrency("INR");
		
		
		Accounts account1=new Accounts();
		account1.setAccount_number("005612385356");
		account1.setAccount_type("Current");
		account1.setAvailable_balance("87565");
		account1.setOpening_date("08-08-2008");
		account1.setCustomer_branch("INDIA");
		account1.setAccount_status("Inactive");
		account1.setCurrency("INR");
		
		
		Accounts account2=new Accounts();
		account2.setAccount_number("004323619876");
		account2.setAccount_type("Fixed Deposit");
		account2.setAvailable_balance("897965");
		account2.setOpening_date("23-01-2010");
		account2.setCustomer_branch("INDIA");
		account2.setAccount_status("Inactive");
		account2.setCurrency("INR");
		
		
		accounts.add(account);
		accounts.add(account1);
		accounts.add(account2);
		
		accounts_information.setAccounts(accounts);
		customer_information.setAccounts_information(accounts_information);
		
		Pie_chart pie_chart=new Pie_chart();
		pie_chart.setCreditCardExpense("232424");
		pie_chart.setLoans("3443535");
		pie_chart.setSavingsAccountBalance("57585858");
		
		customer_information.setPie_chart(pie_chart);
		
		
		
		
		return customer_information;
	}

	/*@Override
	public List<Customer> getCustomerDetails(long customerId,
			String customerName, String email, Long customerMobile) {

		Customer customer = new Customer();
		customer.setCsId(customerId);
		customer.setCustomerName(customerName);
		customer.setCustMobile(customerMobile);
		customer.setEmail(email);

		List<CustAccount> accountData = new ArrayList<>();
		List<Customer> customerList = new ArrayList<>();

		if (customer.getCsId()==1000000000) {

			CustAccount account = new CustAccount();
			account.setAccountnumber(333079151);
			account.setAccounttype("savings");
			account.setAccountbalance("1550034");
			account.setOpeningdate("15-02-2009");
			account.setCurrency("INR");
			account.setAccountstatus("Active");
			account.setId(new Long(1));

			CustAccount account1 = new CustAccount();
			account1.setAccountnumber(333079771);
			account1.setAccounttype("current");
			account1.setAccountbalance("1546");
			account1.setOpeningdate("15-02-2008");
			account1.setCurrency("INR");
			account1.setAccountstatus("Closed");
			account1.setId(new Long(2));

			CustAccount account2 = new CustAccount();
			account2.setAccountnumber(333079157);
			account2.setAccounttype("Remb");
			account2.setAccountbalance("11000");
			account2.setOpeningdate("15-02-2012");
			account2.setCurrency("INR");
			account2.setAccountstatus("Closed");
			account2.setId(new Long(3));

			accountData.add(account);
			accountData.add(account1);
			accountData.add(account2);

			customer.setAccountInfo(accountData);
		}

		else if (customer.getCsId()==1000000001){

			CustAccount account = new CustAccount();
			account.setAccountnumber(30791512);
			account.setAccounttype("savings");
			account.setAccountbalance("18700");
			account.setOpeningdate("13-07-2004");
			account.setCurrency("INR");
			account.setAccountstatus("Inactive");
			account.setId(new Long(1));

			CustAccount account1 = new CustAccount();
			account1.setAccountnumber(307977120);
			account1.setAccounttype("current");
			account1.setAccountbalance("19846");
			account1.setOpeningdate("11-01-2012");
			account1.setCurrency("INR");
			account1.setAccountstatus("Active");
			account1.setId(new Long(2));

			CustAccount account2 = new CustAccount();
			account2.setAccountnumber(307915779);
			account2.setAccounttype("Remb");
			account2.setAccountbalance("16008");
			account2.setOpeningdate("06-03-2014");
			account2.setCurrency("INR");
			account2.setAccountstatus("Closed");
			account2.setId(new Long(3));

			accountData.add(account);
			accountData.add(account1);
			accountData.add(account2);

			customer.setAccountInfo(accountData);
		}

		else if (customer.getCsId()==1000000003) {

			CustAccount account = new CustAccount();
			account.setAccountnumber(330791512);
			account.setAccounttype("savings");
			account.setAccountbalance("187340");
			account.setOpeningdate("01-09-2008");
			account.setCurrency("INR");
			account.setAccountstatus("Active");
			account.setId(new Long(1));

			CustAccount account1 = new CustAccount();
			account1.setAccountnumber(333079771);
			account1.setAccounttype("current");
			account1.setAccountbalance("1912426");
			account1.setOpeningdate("19-07-2012");
			account1.setCurrency("INR");
			account1.setAccountstatus("Inactive");
			account1.setId(new Long(2));

			CustAccount account2 = new CustAccount();
			account2.setAccountnumber(307913479);
			account2.setAccounttype("Remb");
			account2.setAccountbalance("161318");
			account2.setOpeningdate("09-04-2011");
			account2.setCurrency("INR");
			account2.setAccountstatus("Active");
			account2.setId(new Long(3));

			accountData.add(account);
			accountData.add(account1);
			accountData.add(account2);

			customer.setAccountInfo(accountData);
		}

		else {

			CustAccount account = new CustAccount();
			account.setAccountnumber(307915124);
			account.setAccounttype("savings");
			account.setAccountbalance("20000");
			account.setOpeningdate("03-02-2007");
			account.setCurrency("INR");
			account.setAccountbalance("32626262");
			account.setAccountstatus("Active");
			account.setId(new Long(1));

			CustAccount account1 = new CustAccount();
			account1.setAccountnumber(307977254);
			account1.setAccounttype("current");
			account1.setAccountbalance("19182324");
			account1.setOpeningdate("11-04-2011");
			account1.setCurrency("INR");
			account.setAccountbalance("114466");
			account.setAccountstatus("Closed");
			account.setId(new Long(2));

			CustAccount account2 = new CustAccount();
			account2.setAccountnumber(333079154);
			account2.setAccounttype("Remb");
			account2.setAccountbalance("196008");
			account2.setOpeningdate("09-02-2016");
			account2.setCurrency("INR");
			account.setAccountbalance("2324242");
			account.setAccountstatus("Inactive");
			account.setId(new Long(3));

			accountData.add(account);
			accountData.add(account1);
			accountData.add(account2);

			customer.setAccountInfo(accountData);

		}

		customerList.add(customer);

		return customerList;
	}
*/
	@Override
	public List<CustomerVO> getAccountsByCustomerId(String customerId, User user) {

		List<CustomerVO> customerAccounts = new ArrayList<CustomerVO>();
		List<Account> accountList = accountRepository
				.findByCustomerid(customerId);
		List<AccountVO> accountListVO = new ArrayList<AccountVO>();
		CustomerVO customerVO = new CustomerVO();
		customerVO.setCsId(customerId);
		customerVO.setCustomerName(user.getCustomername());
		customerVO.setCustMobile(user.getCustomermobile());
		customerVO.setEmail(user.getCustomeremail());

		for (Account account : accountList) {
			AccountVO accountVO = new AccountVO();
			accountVO.setId(account.getId());
			accountVO.setCustomerid(customerId);
		//	accountVO.setAccountnumber(account.getAccountnumber());
			accountVO.setAccounttype(account.getAccounttype());
			accountVO.setAccountbalance(account.getAccountbalance());
			accountVO.setCurrency(account.getCurrency());
			accountVO.setOpeningdate(account.getOpeningdate());
			accountVO.setAccountstatus(account.getAccountstatus());
			accountListVO.add(accountVO);
		}
		customerVO.setAccountInfo(accountListVO);
		customerAccounts.add(customerVO);
		return customerAccounts;

		// return accountRepository.findByCustomerid(customerId);
	}

	@Override
	public TransactionData getCustomerTranscationDetails(long customerId,
			User user , String accountNumber , String accountType) {

		List<AccountInfo> accountInfo = new ArrayList<AccountInfo>();
		List<Transactions> transactions = new ArrayList<Transactions>();
		TransactionData transactionData = new TransactionData();
		transactionData.setCsId(customerId);
		if (accountNumber.equals("005463289732") &&  accountType.equalsIgnoreCase("SAVING")) {
			AccountInfo firstaccount = new AccountInfo();
			firstaccount.setAccountNumber("005463289732");
			Transactions transaction = new Transactions();
			transaction.setDate("02-12-2008");
			transaction.setTransactionNumber("000046068319");
			transaction.setAmount("5000");
			transaction.setType("cr.");
			transaction.setDescription("NEFT to Brenda Andrews");
			transaction.setFinalAmaount("20000");

			Transactions transactions1 = new Transactions();
			transactions1.setDate("12-09-2007");
			transactions1.setTransactionNumber("000036048246");
			transactions1.setAmount("5000");
			transactions1.setType("cr.");
			transactions1.setDescription("NEFT to Jacob Greene");
			transactions1.setFinalAmaount("20000");

			Transactions transactions2 = new Transactions();
			transactions2.setDate("12-11-2003");
			transactions2.setTransactionNumber("000047866362");
			transactions2.setAmount("6200");
			transactions2.setType("cr.");
			transactions2.setDescription("NEFT to Dennis West");
			transactions2.setFinalAmaount("320000");

			Transactions transactions3 = new Transactions();
			transactions3.setDate("10-02-2001");
			transactions3.setTransactionNumber("000076098315");
			transactions3.setAmount("15000");
			transactions3.setType("cr.");
			transactions3.setDescription("TRM from CHQ NO 456 ABC Pvt. LTD.");
			transactions3.setFinalAmaount("250000");

			transactions.add(transaction);
			transactions.add(transactions1);
			transactions.add(transactions2);
			transactions.add(transactions3);
			firstaccount.setTransactions(transactions);
			accountInfo.add(firstaccount);
		}
		else if (accountNumber.equals("005612385356") &&  accountType.equalsIgnoreCase("CURRENT")){
			AccountInfo secondaccount = new AccountInfo();
			secondaccount.setAccountNumber("005612385356");
			Transactions transactions21 = new Transactions();
			transactions21.setDate("02-12-2008");
			transactions21.setTransactionNumber("000076098318");
			transactions21.setAmount("4700");
			transactions21.setType("dr.");
			transactions21.setDescription("TRM from CHQ NO 456 ABC Pvt. LTD.");
			transactions21.setFinalAmaount("320000");

			Transactions transactions22 = new Transactions();
			transactions22.setDate("12-09-2007");
			transactions22.setTransactionNumber("000046068319");
			transactions22.setAmount("5000");
			transactions22.setType("dr.");
			transactions22.setDescription("PCD/20005468823");
			transactions22.setFinalAmaount("20000");

			Transactions transactions23 = new Transactions();
			transactions23.setDate("12-11-2003");
			transactions23.setTransactionNumber("000046068343");
			transactions23.setAmount("6200");
			transactions23.setType("cr.");
			transactions23.setDescription("PCD/20005468823");
			transactions23.setFinalAmaount("320000");

			Transactions transactions33 = new Transactions();
			transactions33.setDate("10-02-2001");
			transactions33.setTransactionNumber("000046068366");
			transactions33.setAmount("15000");
			transactions33.setType("cr.");
			transactions33.setDescription("PCD/20005468823");
			transactions33.setFinalAmaount("50000");
			
			transactions.add(transactions21);
			transactions.add(transactions22);
			transactions.add(transactions23);
			transactions.add(transactions33);
			secondaccount.setTransactions(transactions);
			
			accountInfo.add(secondaccount);
			}
			
			if (accountNumber.equals("004323619876") &&  accountType.equalsIgnoreCase("FD")){
				AccountInfo thirdaccount = new AccountInfo();
				thirdaccount.setAccountNumber("004323619876");
				Transactions transactions21 = new Transactions();
				transactions21.setDate("02-12-2008");
				transactions21.setTransactionNumber("000046068361");
				transactions21.setAmount("5000");
				transactions21.setType("cr");
				transactions21.setDescription("BANK COMMENT[(NEFT/IMPS) user Comment[like donation,loan]");
				transactions21.setFinalAmaount("20000");

				Transactions transactions22 = new Transactions();
				transactions22.setDate("12-09-2007");
				transactions22.setTransactionNumber("004323619822");
				transactions22.setAmount("5000");
				transactions22.setType("cr. for credit and Dr. for Debit");
				transactions22.setDescription("PCD/20005468823");
				transactions22.setFinalAmaount("20000");

				Transactions transactions23 = new Transactions();
				transactions23.setDate("12-11-2003");
				transactions23.setTransactionNumber("004323619828");
				transactions23.setAmount("6200");
				transactions23.setType("cr.");
				transactions23.setDescription("PCD/20005468823");
				transactions23.setFinalAmaount("320000");

				Transactions transactions33 = new Transactions();
				transactions33.setDate("10-02-2001");
				transactions33.setTransactionNumber("004323619823");
				transactions33.setAmount("15000");
				transactions33.setType("cr.");
				transactions33.setDescription("PCD/200054688454");
				transactions33.setFinalAmaount("50000");
				
				transactions.add(transactions21);
				transactions.add(transactions22);
				transactions.add(transactions23);
				transactions.add(transactions33);
				
				thirdaccount.setTransactions(transactions);
				accountInfo.add(thirdaccount);
				}



			transactionData.setAccountInfo(accountInfo);

		

		return transactionData;
	}

	

	@Override
	public CustPayee addPayee(CustPayee custPayee) {
		// TODO Auto-generated method stub
		return populateDummayPayee(custPayee);
		
		
	}

	
	public static CustPayee populateDummayPayee(CustPayee custPayee){
		
		CustPayee custPayee1=new CustPayee();
		custPayee1.setCustomer_Id(custPayee.getCustomer_Id());
//		custPayee1.setAddPayee(addPayee);
		AddPayee addPayee=new AddPayee();
		addPayee.setPayeeAccountNumber(custPayee.getAddPayee().getPayeeAccountNumber());
		addPayee.setPayeeIFSC(custPayee.getAddPayee().getPayeeIFSC());
		addPayee.setPayeeName(custPayee.getAddPayee().getPayeeName());
		addPayee.setPayeeNickName(custPayee.getAddPayee().getPayeeNickName());
		custPayee1.setAddPayee(addPayee);
		return custPayee1;
		
	}
}
