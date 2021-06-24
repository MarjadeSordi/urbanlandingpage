import styled from 'styled-components';

export const ListMenu = styled.li`
  list-style: none;
  padding-right: 5%;
  margin-top: 0;
`;

export const ListText = styled.p`
  color: #393a3a;
  &: hover {
    color: #fffafa;
  }
`;

export const MenuStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MenudivCapsula = styled.div`
  width: 95%;
  margin-top: 1%;
  @media (max-width: 700px) {
    visibility: hidden;
  }
`;

export const MenuResponsivo = styled.button`
  background-color: transparent;
`;
