import data from "./data.json"

const StatsTitle = () => {
    return (
        <h2 className="title">Upload stats</h2>
    )
}

const StatsData = ({id, label, percentage}) => {
    return (
                <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
                </li>
    )
}

export const Statistics = () => {
    return (
        <div>
            <StatsTitle />
            <ul>
                {data.map(el =>
                    <StatsData
                        key={el.id}
                        label={el.label}
                        percentage={el.percentage}
                    />
                    )}
            </ul>
        </div>
    )
}
