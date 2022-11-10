import PropTypes from 'prop-types';
import { FriendsList } from './FriendsList.styled';

export default function FriendList({ children }) {
  return <FriendsList>{children}</FriendsList>;
}

FriendList.propTypes = {
  children: PropTypes.node,
};
