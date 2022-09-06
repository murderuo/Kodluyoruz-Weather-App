import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  width: 50%;
  & > button {
    margin :10px;
    padding: 10px;
    border-radius: 2px;
    background-color: gray;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:10px;
`;
