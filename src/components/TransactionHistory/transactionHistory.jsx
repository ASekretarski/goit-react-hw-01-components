import transactions from "./transactions"

const TransactionHistoryHead = () => {
    return (
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
    )
}

const TransactionHistoryData = ({type, amount, currency}) => {
    return (
        <tbody>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    )
}

export const TransactionHistory = () => {
    return (
        <table>
            <TransactionHistoryHead />
            {transactions.map(el =>
                <TransactionHistoryData
                    key={el.id}
                    type={el.type}
                    amount={el.amount}
                    currency={el.currency}
                />
            )}
        </table>
    )
}