import user from "./user.json"

const Description = ({ avatar, username, tag, location }) => {
    return (
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>
    )
}

const Stats = ({ stats }) => {
    return (
        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    )
}

export const Profile = () => {
    return (
        <div className="profile">
            <Description
                avatar={user.avatar}
                username={user.username}
                tag={user.tag}
                location={user.location}
            />
            <Stats
                stats={user.stats}
            />
        </div>

    )
}