import styled from '@emotion/styled';

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: rgb(113, 110, 110);
  text-transform: uppercase;
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;
