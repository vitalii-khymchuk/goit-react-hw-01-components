import styled from '@emotion/styled';

export const FriendCard = styled.li`
  width: 200px;
  height: 60px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 2px;

  display: flex;
  align-items: center;

  background-color: #fff;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.75);
`;

export const StatusIndicator = styled.span`
  &::before {
    content: ' ';
    display: block;
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    margin-right: 8px;

    ${({ isOnline }) => {
      if (isOnline) {
        return `
         background-color: green; `;
      }
    }}
  }
`;

export const Name = styled.p`
  margin-left: 8px;
  font-size: 18px;
  font-weight: 600;
`;

export const Photo = styled.img`
   {
    display: block;
  }
`;
