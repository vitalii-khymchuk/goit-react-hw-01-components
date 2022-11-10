import PropTypes from 'prop-types';
import {
  FriendCard,
  StatusIndicator,
  Name,
  Photo,
} from './FriendsListItem.styled';

export default function FriendsListItem({ friends }) {
  return friends.map(({ avatar, id, name, isOnline }) => {
    return (
      <FriendCard key={id}>
        <StatusIndicator isOnline={isOnline}></StatusIndicator>
        <Photo src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </FriendCard>
    );
  });
}

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ),
};
