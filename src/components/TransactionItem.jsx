export default function TransactionItem({ tx, onDelete }) {
  return (
    <div>
      <span>{tx.date}</span>
      <span>{tx.description}</span>
      <span>{tx.category}</span>
      <span>
        {tx.type === 'income' ? '+' : '-'}
        {tx.amount}
      </span>
      <button onClick={() => onDelete(tx.id)}>Delete</button>
    </div>
  );
}
