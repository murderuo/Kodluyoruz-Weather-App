import styled from 'styled-components';

export const NavBarDiv = styled.div`
  padding: 20px;
  border: 1px solid;
  margin-bottom: 20px;
  margin-top: 10x;
  width: 50%;
  background-color: aliceblue;
  font-family: sans-serif;
  text-decoration: none;
  & > a {
    display: inline-block;
    text-decoration: none;
    width: 15%;
  }
  & > button {
    display: inline;
    /* padding: 10px; */
    border-radius: 2px;
    background-color: antiquewhite;
  }

  & > .logout {
    display: inline;
    width:50%;
    /* float: right; */
    /* padding: 5px; */
  }
  & > .logout > button {
    padding: 10px;
  }
`;
