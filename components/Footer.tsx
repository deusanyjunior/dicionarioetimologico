import Image from 'next/image';
import epmLogo from '@/assets/epm.png';
import unifespLogo from '@/assets/unifesp.png';

export function Footer() {
  return <footer className="site-footer"><div className="footer-inner"><p className="footer-caption">Dicionário etimológico de termos morfológicos</p><div className="institution-logos" aria-label="Instituições responsáveis"><Image src={epmLogo} alt="Escola Paulista de Medicina" className="institution-logo"/><Image src={unifespLogo} alt="Universidade Federal de São Paulo" className="institution-logo"/></div></div></footer>;
}
