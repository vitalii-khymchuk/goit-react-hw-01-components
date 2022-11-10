import styled from '@emotion/styled';

export const StatisticsWrap = styled.div`
  background-color: #fff;
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: rgb(113, 110, 110);
`;

export const Categories = styled.ul`
  width: 100%;
  height: 60px;

  display: flex;
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
  font-size: 14px;
  margin-bottom: 4px;
`;
