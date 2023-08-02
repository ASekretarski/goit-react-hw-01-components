import friends from "./friends"

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className="item">
            <span className="status">STATUS</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}


export const FriendList = () => {
    return (
        <ul>
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