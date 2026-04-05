import { useState } from 'react';

const CATEGORIES = [
  'Work',
  'Food',
  'Housing',
  'Transport',
  'Entertainment',
  'Health',
  'Other',
];

export default function AddTransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const handleSubmit = () => {
    if (!description || !amount) return;
    onAdd({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().slice(0, 10),
    });
    setDescription('');
    setAmount('');
  };
  return (
    <div>
      <input
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder='Amount'
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value='expense'>Expense</option>
        <option value='income'>Income</option>
      </select>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
