import { ButtonContact } from './styles';

interface IButton {
  children: string;
}

export default function Button({children}:IButton) {
  return (
    <ButtonContact>
      {children}
    </ButtonContact>
  );
}
