import styled from "styled-components";

export const CustomButton = styled.button`
  font-size: 10px;
  color: ${(props) => (props.activeButton ? "#ffffff" : 'black')};
  border-radius: 20px;
  border: none;
  background-color: ${(props) => (props.activeButton? 'black' : 'transparent')};
  height:25px;
  width:150px;
  margin-top:3px;
`