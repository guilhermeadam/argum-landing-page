import styled from 'styled-components';

import LogoImg from '../../assets/images/argum-logo.svg';

export const Box = styled.header`
padding-top: 30px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const Logo = styled.img.attrs({
  src: LogoImg,
  alt: 'Argum Logo'
})`
width: 250px;
`;

export const MenuList = styled.ul`
margin-left: auto;
`;

export const ItemList = styled.li`
display: inline-block;
margin-right: 25px;
font-weight: 500;

&:hover {
  a {
    border-bottom: 4px solid #186D77;
transition: all 0.25s ease-out;

  }
}

a {
  color: #186D77;
  transition: color 0.25s ease;
  }
`;

