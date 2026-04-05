import { useState } from 'react';
import './App.css';
import SummaryCard from './components/SummaryCard';
import TransactionList from './components/TransactionList';
import SEED_TRANSACTIONS from './data/seed';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [transactions, setTransactions] = useState(SEED_TRANSACTIONS);

  const handleAdd = (tx) => setTransactions((prev) => [tx, ...prev]);
  const handleDelete = (id) =>
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  return (
    <div>
      <h1>Budget Tracker</h1>
      <SummaryCard label='Balance' amount={500} />
      <SummaryCard label='Income' amount={500} />
      <SummaryCard label='Expense' amount={500} />
      <AddTransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </div>
  );
}

export default App;
