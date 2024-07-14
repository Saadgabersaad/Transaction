import React from "react";

const TransactionList = ({ transactions }) => {
  return (
  
        <table className="table text-center table-bordered table-responsive shadow">
          <thead className="table-primary">
            <tr className=" table-active  border border-2 rounded-5 p-2 ">
              <th className="col">Amount</th>
              <th className="col">Created At</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="col">{transaction.amount}</td>
                <td className="col">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
 
  );
};

export default TransactionList;
