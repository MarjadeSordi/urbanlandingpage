import styled from "styled-components";

export const ButtonLogar = styled.button`
  border: none;

  color: #ffffff;
  background-color: #65325b;
  padding: 2%;
  width: 30%;
  border-radius: 30px;
  box-shadow: 0 0 1em #add8e6;
  cursor: pointer;
  &: hover {
    background-color: #fffafa;
    color: #65325b;
  }
`;

export const DivLogar = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition:visibility 2s;
  width: 60%
  display: flex;
  flex-direction: column;
  
  box-shadow: 0 0 1em #add8e6;
  position: absolute;
  padding: 6%;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const InputLogin = styled.input`
  width: 90%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #65325b;
`;

export const ButtonSubmit = styled.button`
  border: none;
  color: #ffffff;
  background-color: #65325b;
  padding: 2%;
  width: 20%;
  border-radius: 30px;
  box-shadow: 0 0 1em #add8e6;
  cursor: pointer;
  &: hover {
    background-color: #fffafa;
    color: #65325b;
  }
  margin-top: 5%;
  margin-left: 70%;
`;

export const ButtonX = styled.button`
  margin-left: 90%;
  border: none;
  background: transparent;
`;
