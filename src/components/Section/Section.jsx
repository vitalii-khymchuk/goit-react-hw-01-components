import PropTypes from 'prop-types';
import { SectionTitle } from './Section.styled';
import { Box } from 'components/Box.styled';

export default function Section({ title, children }) {
  return (
    <Box
      as="section"
      bg="sectionBgColor"
      mx="auto"
      maxWidth="720px"
      px={2}
      py={4}
    >
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
