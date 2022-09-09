import styled from 'styled-components';

export const MainContaierDiv = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
  border: 1px solid;
  /* border-radius: 5px; */
  /* border-top-left-radius: 5%; */
  border-top-right-radius: 20%;
  border-bottom-left-radius: 25%;
  /* border-bottom-right-radius: 5%; */
  /* background-color: black;
  color: white; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const CitysDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 30%;
  /* flex-flow: column; */
  flex-grow: 1;
  /* flex-shrink: 0; */
  /* flex-wrap: wrap; */
  padding: 5px;
  /* border: 1px solid; */
  border-right: 1px solid;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-wrap: wrap; */
  padding: 10px;
  /* border-bottom: 1px solid rgb(0, 0, 0); */
  margin-bottom: 10px;
  & > label {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & > input {
    width: 100%;
    height: 30px;
    border: 1px solid rgb(148, 144, 144);
    /* border-radius: 5px; */
    padding: 5px;
  }
  & > h3 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const RecentCityList = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  padding: 10px;
  width: 100%;
`;

export const RecentCityItem = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  border-bottom: 1px solid;
  padding: 5px;
  font-size: 20px;

  & > label::before {
    content: '> ';
  }

  & > label > span {
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
  }
  & > label > span::after {
    content: '°C';
    font-size: 15px;
    font-weight: bold;
    /* margin-left: 20px; */
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid; */
  flex-grow: 1;
  /* flex-shrink: 1; */
  flex-basis: 70%;
  & > label {
    /* flex-wrap: wrap; */
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
    font-family: sans-serif;
  }
`;

export const ListItemDiv = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
`;

export const ListItemCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* justify-items: center; */
  /* border: 1px solid; */
  gap: 5px;
  flex-wrap: wrap;
  flex: 1;
  padding: 5px;
  text-align: center;
  & > span {
    font-weight: bold;
  }
`;

export const PortalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  left: 30%;
  width: 50%;
  height: 50%;
  background-color: #eee3cb;
  border: 1px solid;
`;
