
import { AptosClient } from 'aptos';

// Initialize the Aptos client
const client = new AptosClient('https://fullnode.testnet.aptoslabs.com/v1'); // or testnet/devnet

export const getTransactions = async (address) => {
  try {
    const transactions = await client.getAccountTransactions(address);

    console.log(transactions);
    return transactions;
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    throw error;
  }
};