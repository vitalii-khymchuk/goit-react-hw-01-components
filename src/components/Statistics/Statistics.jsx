import PropTypes from 'prop-types';
import { Box } from 'components/Box.styled';
import { Title, StatItem, Label } from './Statistics.styled';
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
      <Title>{title.toUpperCase()}</Title>
      <Box as="ul" display="flex" width="100%" height="60px">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem style={{ backgroundColor: randomHexColor() }} key={id}>
              <Label>{label}</Label>
              <span>{percentage + '%'}</span>
            </StatItem>
          );
        })}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
