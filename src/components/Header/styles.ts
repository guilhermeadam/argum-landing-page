import styled from 'styled-components';

import LogoImg from '../../assets/images/argum-logo.svg';

export const Box = styled.header`
margin-top: 30px;
height: 42px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const Logo = styled.img.attrs({
  src: LogoImg,
  alt: 'Argum Logo'
})`
width: 200px;
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
    color: #17a4d0;
  }
}

a {
  color: #1e255e;
  transition: color 0.25s ease;
  }
`;

export const Button = styled.button`
width: 130px;
height: 42px;
border: 1px solid #17a4d0;
color: #17a4d0;
font-size: 14px;
margin-left: 25px;
border-radius: 4px;
transition: all 0.25s ease-out;
box-shadow: 0px 0px 17px -8px transparent;

&:hover {
  color: #fff;
  background: #17a4d0;
  box-shadow: 0px 0px 17px -8px #17a4d0;

}
`;
