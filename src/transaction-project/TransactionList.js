import Trasaction from './Transaction';
function TransactionList({ items, update }) {
    function updateTransactionList(e) {
        update(e);
    }
    return <ul className='list-unstyled transaction-list'>
        <Trasaction items={items} updateTransaction={updateTransactionList} />
    </ul>
}
export default TransactionList;