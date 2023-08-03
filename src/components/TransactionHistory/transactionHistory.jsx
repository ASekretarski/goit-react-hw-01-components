import css from "./transactionHistory.module.css"
import PropTypes from "prop-types"

const TransactionHistoryHead = () => {
    return (
        <thead>
            <tr className={css.trHead}>
                <th className={css.th}>Type</th>
                <th className={css.th}>Amount</th>
                <th className={css.th}>Currency</th>
            </tr>
        </thead>
    )
}

const TransactionHistoryData = ({type, amount, currency}) => {
    return (
            <tr className={css.tr}>
                <td className={css.td}>{type}</td>
                <td className={css.td}>{amount}</td>
                <td className={css.td}>{currency}</td>
            </tr>
    )
}

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.table}>
            <TransactionHistoryHead />
            <tbody>
            {items.map(el =>
                <TransactionHistoryData
                    key={el.id}
                    type={el.type}
                    amount={el.amount}
                    currency={el.currency}
                />
            )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array
}

TransactionHistoryData.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}