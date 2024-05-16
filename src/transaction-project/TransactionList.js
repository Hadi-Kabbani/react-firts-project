import Trasaction from './Transaction';
function TransactionList({ items, update, Delete }) {
    function updateTransactionList(e) {
        update(e);
    }
    function DeleteTransactionList(e) {
        Delete(e);
    }
    return <ul className='list-unstyled transaction-list'>
        <Trasaction items={items} updateTransaction={updateTransactionList} DeleteTransaction={DeleteTransactionList} />
    </ul>
}
export default TransactionList;