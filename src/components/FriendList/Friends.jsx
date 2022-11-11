import PropTypes from 'prop-types';
import { Box } from 'components/Box.styled';
import { StatusIndicator, Name, Photo } from './Friends.styled';

export default function FriendList({ friends }) {
  return (
    <Box as="ul" display="flex" flexDirection="column" alignItems="center">
      {friends.map(({ avatar, id, name, isOnline }) => {
        return (
          <Box
            key={id}
            as="li"
            width="200px"
            height="60px"
            mb={2}
            p={2}
            borderRadius="2px"
            display="flex"
            alignItems="center"
            bg="componentBgColor"
            boxShadow="default"
          >
            <StatusIndicator isOnline={isOnline}></StatusIndicator>
            <Photo src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Box>
        );
      })}
    </Box>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
