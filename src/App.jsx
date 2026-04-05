import './App.css';
import SummaryCard from './components/SummaryCard';

function App() {
  return (
    <div>
      <h1>Budget Tracker</h1>
      <SummaryCard label='Balance' amount={500} />
      <SummaryCard label='Income' amount={500} />
      <SummaryCard label='Expense' amount={500} />
    </div>
  );
}

export default App;
