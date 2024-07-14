import { Bar} from 'react-chartjs-2';
import {Chart, LinearScale, PointElement, Tooltip, Legend, TimeScale, BarElement} from "chart.js";
import 'chartjs-adapter-luxon';

Chart.register(LinearScale, PointElement, Tooltip, Legend, TimeScale, BarElement);

const TransactionGraph = ({ transactions }) => {

  const dailyTransactions = transactions.reduce((acc, transaction) => {
    const date = transaction.date;

    if (!acc[date]) acc[date] = 0;

    acc[date] += transaction.amount;
    return acc;
  }, {});

  const labels = Object.keys(dailyTransactions).map(date => date);

  const data = {
    labels,
    datasets: [{
      label: 'Total Transaction Amount',
      data: Object.values(dailyTransactions), 
      backgroundColor: 'rgba(6,128,2,0.4)',
    }]
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Transaction Amount',
        },
      },
    },
  };

  return <Bar data={data} options={options}/>;
};

export default TransactionGraph;