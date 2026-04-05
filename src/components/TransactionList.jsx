import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions }) {
  return (
    <div>
      {transactions.map((tx) => (
        <TransactionItem key={tx.id} tx={tx} />
      ))}
    </div>
  );
}
