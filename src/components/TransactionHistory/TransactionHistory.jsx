import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'
export default function TransactionHistory({ transactions }) {
    return (
        <div className={css.datagrid}>
            <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>TYPE</th>
      <th>AMOUNT</th>
      <th>CURRENCY</th>
    </tr>
  </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key = {id}>
                            <td>{ type }</td>
                            <td>{ amount }</td>
                            <td>{ currency }</td>
                        </tr>
                    )
                })}
    
   
  </tbody>
</table>
        </div>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }))
}