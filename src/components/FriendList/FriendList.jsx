import PropTypes from 'prop-types';
import { Box } from 'components/Box.styled';

export default function FriendList({ children }) {
  return (
    <Box as="ul" display="flex" flexDirection="column" alignItems="center">
      {children}
    </Box>
  );
}

FriendList.propTypes = {
  children: PropTypes.node,
};
