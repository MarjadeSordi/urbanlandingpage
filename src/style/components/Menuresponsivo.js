import styled from 'styled-components';

export const ListMenu = styled.li`
  list-style: none;
  padding-right: 5%;
  margin-top: 0;
`;

export const ListText = styled.p`
  color: #393a3a;
  font-size: 80%;
  &: hover {
    color: #fffafa;
  }
`;

export const MenuStyle = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  justify-content: flex-end;
  background-color: EAEBEB;
  width: 100%;
`;

export const MenudivCapsula = styled.div`
  top: 1%;
  position: absolute;
  left: 80%;
`;

export const MenuButton = styled.button`
  @media (min-width: 1024px) {
    visibility: hidden;
  }
  @media (max-width: 700px) {
    visibility: visible;
  }
  background-color: transparent;
  border: none;
`;

export const ImagemLogo = styled.img`
  width: 50%;
  height: 50%;
`;

export const ButtonX = styled.button`
  background-color: transparent;
  border: none;
`;
