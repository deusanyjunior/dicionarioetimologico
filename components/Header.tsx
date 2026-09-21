import Image from 'next/image';
import Link from 'next/link';
import epmLogo from '@/assets/epm.png';
import unifespLogo from '@/assets/unifesp.png';

export function Header() {
  return <header className="site-header"><div className="header-inner"><div className="header-brand-group"><Link className="brand" href="/">Dicionário <span>etimológico</span></Link><div className="institution-logos" aria-label="Instituições responsáveis"><Image src={epmLogo} alt="Escola Paulista de Medicina" className="institution-logo" priority/><Image src={unifespLogo} alt="Universidade Federal de São Paulo" className="institution-logo" priority/></div></div><nav aria-label="Navegação principal"><Link href="/">Dicionário</Link><Link href="/sobre">Sobre</Link></nav></div></header>;
}
