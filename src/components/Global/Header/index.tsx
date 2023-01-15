import Image from 'next/image';
import logoImg from '../../../assets/logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoImg} alt="Logo" width={129.74} height={52} />
    </HeaderContainer>
  );
}
