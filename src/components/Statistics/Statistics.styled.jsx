import styled from '@emotion/styled';

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes[3]}px;
  color: rgb(113, 110, 110);
`;

export const StatItem = styled.li`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 18px;
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;
