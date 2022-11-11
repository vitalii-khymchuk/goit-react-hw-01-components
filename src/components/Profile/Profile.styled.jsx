import styled from '@emotion/styled/macro';

export const Avatar = styled.img`
  display: block;
  border-radius: 50% 50%;
  height: 100px;
  width: 100px;
`;

export const ProfileText = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: ${p => p.theme.colors.secondaryTextColor};

  margin-top: ${p => p.theme.space[1]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Name = styled.p`
  ${ProfileText};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.mainTextColor};
`;

// Чи краще було li зробити як Box компонент?
export const StatsItem = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${p => p.theme.borders.default};
  font-size: ${p => p.theme.fontSizes[1]}px;
  color: ${p => p.theme.colors.secondaryTextColor};
`;

export const StatsNumber = styled.span`
  margin-top: ${p => p.theme.space[1]}px;

  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.mainTextColor};
`;
