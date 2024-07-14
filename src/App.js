import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionTable from "./components/TransactionTable";
import CustomerTable from "./components/CustomerTable";
import TransactionGraph from "./components/TransactionGraph";

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/customers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => console.error("Error fetching customers:", error));

    axios
      .get("http://localhost:8080/transactions")
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const filteredTransactionsById = transactions.filter(
    (t) => t.customer_id == selectedCustomerId
  );

  const filteredTransactionsByAmount = transactions.filter(
    (t) => t.amount == selectedAmount
  );

  return (
    <div className="App container  text-center">
      <div>
        <h1 className=" py-3 my-5 w-50 rounded rounded-5   bg-info  mx-auto ">
          List Customers and Transactions
        </h1>
        <CustomerTable customers={customers} transactions={transactions} />
      </div>

      <div>
        <h1 className=" py-3 fs-2 mb-5">List Transaction By user</h1>
        <select
          className="form-select mb-5  w-25 mx-auto"
          onChange={(e) => setSelectedCustomerId(e.target.value)}
        >
          <option  value="">Select a Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        {selectedCustomerId && (
          <>
            <TransactionTable transactions={filteredTransactionsById} />
            <TransactionGraph transactions={filteredTransactionsById} />
          </>
        )}
      </div>

      <div>
        <h1 className="my-3 fs-2 py-3">List Transaction By user</h1>
        <input
          className="form-control w-25 mx-auto mb-4 "
          type={"text"}
          onChange={(e) => setSelectedAmount(e.target.value)}
        />
        {filteredTransactionsByAmount != 0 && (
          <TransactionTable transactions={filteredTransactionsByAmount} />
        )}
      </div>
    </div>
  );
}

export default App;
