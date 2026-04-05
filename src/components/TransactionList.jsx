import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      {transactions.map((tx) => (
        <TransactionItem key={tx.id} tx={tx} onDelete={onDelete} />
      ))}
    </div>
  );
}
