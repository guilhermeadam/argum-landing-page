import { ButtonContact } from '../Button/styles';
import { Container } from './styles';

import ArgumContent from '../../assets/images/teste.svg';

export default function Content() {
  return (
    <Container>
      <div>
        <h1>Design driven development of your mobile product</h1>
        <h6>We are full service digital agency that builds immesive business intelligence.</h6>
        <ButtonContact>Contact Us</ButtonContact>

      </div>

      <div>
        <img src={ArgumContent} alt="Argum"  />
      </div>
    </Container>
  );
}
