
import css from "./profile.module.css"
import PropTypes from "prop-types"

const Description = ({ avatar, username, tag, location }) => {
    return (
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    )
}

const Stats = ({ stats }) => {
    return (
        <ul className={css.stats}>
            <li className={css.statsItem}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
    )
}

export const Profile = ({avatar, username, tag, location, stats}) => {
    return (
        <div className={css.profile}>
            <Description
                avatar={avatar}
                username={username}
                tag={tag}
                location={location}
            />
            <Stats
                stats={stats}
            />
        </div>

    )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object
}

