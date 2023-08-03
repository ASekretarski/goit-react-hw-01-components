import css from "./statistics.module.css"
import PropTypes from "prop-types"

const StatsTitle = ({title}) => {
    if (title) {
        return (
            <h2 className={css.title}>{title}</h2>
        )
    }
}

const StatsData = ({label, percentage}) => {
    return (
                <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
                </li>
    )
}

export const Statistics = ({title, stats}) => {
    return (
        <div className={css.statistics}>
            <StatsTitle title={title} />
            <ul className={css.itemList}>
                {stats.map(el =>
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

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}

StatsData.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}