import Profile from './components/Social-profile/Social.jsx';
import user from './components/Social-profile/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/Friends-list/FriendList.jsx';
import friends from './components/Friends-list/friends.json';
import TransactionHistory from './components/TransacrionHistory/TransactionHistory';
import transactions from './components/TransacrionHistory/transactions.json';
function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
