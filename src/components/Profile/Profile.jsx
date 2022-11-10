import PropTypes from 'prop-types';
import {
  ProfileCard,
  Avatar,
  Info,
  Name,
  Stats,
  StatsItem,
  StatsNumber,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Info>
        <Avatar src={avatar} alt={`${username}'s avatar`} />
        <Name>{username}</Name>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </Info>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <StatsNumber>{stats.followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsNumber>{stats.views}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsNumber>{stats.likes}</StatsNumber>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
