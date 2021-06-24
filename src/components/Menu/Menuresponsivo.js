import { React, useState } from 'react';
import { Menuinfo } from './Menuinfo';
import {
  ListMenu,
  MenuStyle,
  ListText,
  MenudivCapsula,
  ImagemLogo,
  MenuButton,
  ButtonX,
} from '../../style/components/Menuresponsivo';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import urbialogo from '../../assets/Urbia_Blue_Klein.png';

import { FaBars } from 'react-icons/fa';

const Menuresponsivo = () => {
  const [menu, setMenu] = useState(false);
  const redirecionar = useHistory();
  const BackHome = () => {
    redirecionar.push('/');
  };

  const MostraMenu = () => {
    setMenu(true);
  };

  const ExitMenu = () => {
    setMenu(false);
  };
  return (
    <>
      <MenudivCapsula>
        <MenuButton onClick={MostraMenu}>
          {' '}
          <FaBars size={22} />{' '}
        </MenuButton>
        <MenuStyle visible={menu}>
          {' '}
          <ImagemLogo src={urbialogo} alt="Logotipo URBIA" onClick={BackHome} />
          <ButtonX onClick={ExitMenu}>
            {' '}
            <AiOutlineClose />{' '}
          </ButtonX>
          {Menuinfo.map((item, key) => {
            return (
              <ListMenu key={key}>
                {' '}
                <Link to={item.link} style={{ textDecoration: 'none' }}>
                  {' '}
                  <ListText>{item.title} </ListText>
                </Link>{' '}
              </ListMenu>
            );
          })}
        </MenuStyle>
      </MenudivCapsula>
    </>
  );
};

export default Menuresponsivo;
