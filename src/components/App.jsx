import Section from "components/Section/Section";
import Profile from "components/Profile/Profile"
import user from 'components/Profile/user'
import Statistics from "components/Statistics/Statistics";
import data from 'components/Statistics/data'

export const App = () => {
  return (
    <>
    <Section title='Task 01 - Profile'>
         <Profile
      username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
      </Section>
      <Section title='Task 02 - Statistics'>
        <Statistics
          stats={data}
          title='Upload stats'
        />
    </Section>
    </>
  );
};
