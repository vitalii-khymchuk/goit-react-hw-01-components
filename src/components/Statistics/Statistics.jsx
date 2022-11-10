import PropTypes from 'prop-types';
import {
  StatisticsWrap,
  Title,
  Categories,
  StatItem,
  Label,
} from './Statistics.styled';
import randomHexColor from 'utils/randomHexColor';
export default function Statistics({ stats, title }) {
  return (
    <StatisticsWrap>
      <Title>{title.toUpperCase()}</Title>
      <Categories>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem style={{ backgroundColor: randomHexColor() }} key={id}>
              <Label>{label}</Label>
              <span>{percentage + '%'}</span>
            </StatItem>
          );
        })}
      </Categories>
    </StatisticsWrap>
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
