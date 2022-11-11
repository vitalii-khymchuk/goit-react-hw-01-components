import PropTypes from 'prop-types';
import {
  Avatar,
  Name,
  ProfileText,
  StatsItem,
  StatsNumber,
} from './Profile.styled';
import { Box } from 'components/Box.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      bg="componentBgColor"
      borderRadius="2px"
      border="default"
      mx="auto"
      width="250px"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        my={3}
        mx="auto"
      >
        <Avatar src={avatar} alt={`${username}'s avatar`} />
        <Name>{username}</Name>
        <ProfileText>{`@${tag}`}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </Box>

      <Box width="100%" display="flex" justifyContent="space-around" bg="azure">
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
      </Box>
    </Box>
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
