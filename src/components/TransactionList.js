import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <ul className="list-unstyled">
      {transactions.map((transaction) => (
        <li
          key={transaction.id}
        >{` amount: ${transaction.amount}, at: ${transaction.date} `}</li>
      ))}
    </ul>
  );
};

export default TransactionList;
