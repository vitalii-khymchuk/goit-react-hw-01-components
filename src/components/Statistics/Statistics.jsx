import PropTypes from 'prop-types';
import { Box } from 'components/Box.styled';
import { Title, Label } from './Statistics.styled';
import randomHexColor from 'utils/randomHexColor';
export default function Statistics({ stats, title }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      bg="componentBgColor"
      mx="auto"
      width="300px"
    >
      {title && <Title>{title}</Title>}
      <Box as="ul" display="flex" width="100%" height="60px">
        {stats.map(({ id, label, percentage }) => {
          return (
            <Box
              key={id}
              bg={randomHexColor()}
              color="mainTextColor"
              fontSize={3}
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Label>{label}</Label>
              <span>{percentage + '%'}</span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
