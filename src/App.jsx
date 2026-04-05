import './App.css';
import SummaryCard from './components/SummaryCard';
import TransactionList from './components/TransactionList';
import SEED_TRANSACTIONS from './data/seed';

function App() {
  return (
    <div>
      <h1>Budget Tracker</h1>
      <SummaryCard label='Balance' amount={500} />
      <SummaryCard label='Income' amount={500} />
      <SummaryCard label='Expense' amount={500} />
      <TransactionList transactions={SEED_TRANSACTIONS} />
    </div>
  );
}

export default App;
