import Link from 'next/link';

export function Header() {
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/">Dicionário <span>etimológico</span></Link><nav aria-label="Navegação principal"><Link href="/">Dicionário</Link><Link href="/sobre">Sobre</Link></nav></div></header>;
}
