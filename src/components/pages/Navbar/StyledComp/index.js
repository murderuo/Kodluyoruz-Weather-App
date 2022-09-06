import styled from "styled-components";

export const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-start;
  border: 1px solid;
  margin-bottom: 20px;
  margin-top: 30px;
  width: 50%;
  & > a {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    text-decoration: none;
    width: 15%;
  }
`;
