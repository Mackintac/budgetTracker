export default function TransactionItem({ tx }) {
  return (
    <div>
      <span>{tx.date}</span>
      <span>{tx.description}</span>
      <span>{tx.category}</span>
      <span>
        {tx.type === 'income' ? '+' : '-'}
        {tx.amount}
      </span>
    </div>
  );
}
