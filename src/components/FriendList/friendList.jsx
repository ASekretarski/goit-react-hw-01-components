import css from "./friendList.module.css"
import PropTypes from "prop-types"

const FriendListItem = ({ avatar, name, isOnline }) => {
    const onlineStatus = isOnline ? "online":"offline"
    return (
        <li className={css.item}>
            <span className={css[onlineStatus]}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css}>{name}</p>
        </li>
    )
}

export const FriendList = ({friends}) => {
    return (
        <ul className={css.container}>
            {friends.map(el =>
                <FriendListItem
                    key={el.id}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline}
                />
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}