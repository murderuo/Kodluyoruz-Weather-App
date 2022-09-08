import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  width: 50%;
  margin: 0 auto;
  background-color: #b7c4cf;
  & > button {
    margin: 10px;
    padding: 5px;
    border-radius: 2px;
    background-color: #eee3cb;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
