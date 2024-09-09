import React, { useEffect, useState } from 'react';
import { getTransactions } from './aptosService';

const TransactionList = ({ address }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const txss = await getTransactions(address);
        setTransactions(txss);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [address]);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error fetching transactions: {error.message}</p>;

  return (
    <div>
      <ul>
        {transactions.slice(0,4).map((txs, index) => (
          <li key={index}>
            <p><strong>Sender:</strong> {txs.sender}</p>
            <p><strong>Hash:</strong> {txs.hash}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// // Example function to fetch transactions
// const getTransactions = async (address) => {
//   try {
//     const response = await axios.get(https://fullnode.devnet.aptoslabs.com/v1/accounts/${address}/transactions);
//     return response.data.transactions;
//   } catch (error) {
//     throw new Error('Failed to fetch transactions');
//   }
// };

// const App = ({ address }) => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const txs = await getTransactions(address);
//         // Process transactions to get transferred amounts
//         const processedTransactions = txs.map(tx => {
//           // Example structure: you need to adjust based on actual API response
//           const coinTransfers = tx.events?.filter(event => event.type === 'coin::CoinTransferEvent') || [];
//           const amounts = coinTransfers.map(event => ({
//             amount: event.data.amount,
//             from: event.data.sender,
//             to: event.data.receiver
//           }));
//           return {
//             hash: tx.hash,
//             amounts
//           };
//         });
//         setTransactions(processedTransactions);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTransactions();
//   }, [address]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Transactions for {address}</h1>
//       <ul>
//         {transactions.map(tx => (
//           <li key={tx.hash}>
//             <strong>Transaction Hash:</strong> {tx.hash}
//             <ul>
//               {tx.amounts.length > 0 ? tx.amounts.map((transfer, index) => (
//                 <li key={index}>
//                   <strong>Amount:</strong> {transfer.amount} APT<br />
//                   <strong>From:</strong> {transfer.from}<br />
//                   <strong>To:</strong> {transfer.to}
//                 </li>
//               )) : <li>No coin transfers found</li>}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;