import React from "react";
import TransactionList from "./TransactionList";

const CustomerTable = ({ customers, transactions }) => {
  return (
    <table className="table table-info table-hover  text-center table-bordered table-responsive shadow">
      <thead className="table-primary">
        <tr className=" table-active   border border-2 rounded-5 p-2 ">
          <th className="col">ID</th>
          <th className="col">Name</th>
          <th className="col">Transaction</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td className="col">{customer.id}</td>
            <td className="col">{customer.name}</td>
            <td className="col">
              <TransactionList
                transactions={transactions.filter(
                  (transaction) => transaction.customer_id == customer.id
                )}
              ></TransactionList>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
