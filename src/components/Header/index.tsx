import { Box, Button, ItemList, Logo, MenuList } from './styles';


export default function Header() {
  return (
    <Box>
      <Logo />
      <MenuList>
        <ItemList>
          <a href="#">Home</a>
        </ItemList>
        <ItemList>
          <a href="#">About us</a>
        </ItemList>
        <ItemList>
          <a href="#">How it works</a>
        </ItemList>
        <ItemList>
          <a href="#">Services</a>
        </ItemList>
        <ItemList>
          <a href="#">Contact</a>
        </ItemList>
      </MenuList>
      <Button>Purchase</Button>
    </Box>
  );
}
