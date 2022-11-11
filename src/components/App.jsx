import Section from 'components/Section/Section';
import Profile from 'components/Profile/Profile';
import profileData from 'data/Profile/user';
import Statistics from 'components/Statistics/Statistics';
import statisticsData from 'data/Statictics/data';
import FriendList from 'components/FriendList/FriendList';
import friendsData from 'data/Friends/friends';
import FriendsListItem from 'components/FriendsListItem/FriendsListItem';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/TransactionHistory/transactions';

export const App = () => {
  return (
    <>
      <Section title="Task 01 - Profile">
        <Profile
          username={profileData.username}
          tag={profileData.tag}
          location={profileData.location}
          avatar={profileData.avatar}
          stats={profileData.stats}
        />
      </Section>
      <Section title="Task 02 - Statistics">
        <Statistics stats={statisticsData} title="Upload stats" />
      </Section>
      <Section title="Task 03 - Friends list">
        <FriendList>
          <FriendsListItem friends={friendsData} />
        </FriendList>
      </Section>
      <Section title="Task 04 - Transaction history">
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
};
