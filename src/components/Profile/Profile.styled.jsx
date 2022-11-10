import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  margin-right: auto;
  margin-left: auto;

  background-color: #fff;
  border-radius: 3px;
  border: 1px solid rgb(40, 208, 208);
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50% 50%;
  height: 100px;
  width: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;

  & p {
    text-align: center;
    font-size: 14px;
    color: grey;

    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

export const Name = styled.p`
  div & {
    font-size: 18px;
    font-weight: 600;

    color: black;
  }
`;

export const Stats = styled.ul`
  width: 100%;

  display: flex;
  justify-content: space-around;

  background-color: azure;
`;

export const StatsItem = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(40, 208, 208);
  font-size: 14px;
  color: grey;
`;

export const StatsNumber = styled.span`
  margin-top: 4px;

  font-size: 18px;
  font-weight: 600;
  color: black;
`;
