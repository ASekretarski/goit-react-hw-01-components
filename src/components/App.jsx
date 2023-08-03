import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/statistics";
import { FriendList } from "./FriendList/friendList";
import { TransactionHistory } from "./TransactionHistory/transactionHistory";
import css from "./app.module.css"

import user from "./Profile/user.json"
import data from "./Statistics/data.json"
import friends from "./FriendList/friends"
import transactions from "./TransactionHistory/transactions"

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div >
  );
};
