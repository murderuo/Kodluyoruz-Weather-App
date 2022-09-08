import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  border: 1px solid;
  width: 50%;
  margin: 0 auto;
  background-color: #b7c4cf;
  /* align-self: flex-end; */
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
  flex:1;
  width:40%;
  align-items: center;
  justify-content: space-between;
  /* justify-content: right; */
  margin: 10px;
`;
