import React from 'react';
import { Menuinfo } from './Menuinfo';
import {
  ListMenu,
  MenuStyle,
  ListText,
  MenudivCapsula,
} from '../../style/menucapa';
import { useHistory } from 'react-router-dom';

import { Imagemlogo } from '../../style/Pages/Homepage';
import { HashLink as Link } from 'react-router-hash-link';
import urbialogo from '../../assets/Urbia_Blue_Klein.png';

const Menucapa = () => {
  const redirecionar = useHistory();
  const BackHome = () => {
    redirecionar.push('/');
  };

  return (
    <MenudivCapsula>
      <MenuStyle>
        {' '}
        <Imagemlogo src={urbialogo} alt="Logotipo URBIA" onClick={BackHome} />
        {Menuinfo.map((item, key) => {
          return (
            <ListMenu key={key}>
              {' '}
              <Link smooth to={item.link} style={{ textDecoration: 'none' }}>
                {' '}
                <ListText>{item.title} </ListText>
              </Link>{' '}
            </ListMenu>
          );
        })}
      </MenuStyle>
    </MenudivCapsula>
  );
};

export default Menucapa;
