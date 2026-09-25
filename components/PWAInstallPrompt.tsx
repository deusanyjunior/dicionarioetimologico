'use client';

import { useEffect, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export function PWAInstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone || sessionStorage.getItem('pwa-install-dismissed') === 'true') return;

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(ios);

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      setShow(true);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    if (ios) {
      const timer = window.setTimeout(() => setShow(true), 1200);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      };
    }

    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
  }, []);

  function dismiss() {
    sessionStorage.setItem('pwa-install-dismissed', 'true');
    setShow(false);
  }

  async function install() {
    if (!installEvent) return;
    await installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
    setShow(false);
  }

  if (!show) return null;

  return <div className="pwa-install-backdrop" role="presentation"><section className="pwa-install-dialog" role="dialog" aria-modal="true" aria-labelledby="pwa-install-title"><button className="pwa-install-close" type="button" aria-label="Fechar aviso de instalação" onClick={dismiss}>×</button><div className="pwa-install-icon" aria-hidden="true">D</div><h2 id="pwa-install-title">Instale o dicionário</h2>{isIOS ? <p>Para instalar no iPhone ou iPad, toque em <strong>Compartilhar</strong> e depois em <strong>Adicionar à Tela de Início</strong>.</p> : <p>Tenha acesso rápido ao dicionário e consulte os termos mesmo quando estiver sem internet.</p>}{!isIOS && <button className="pwa-install-action" type="button" onClick={install}>Instalar aplicação</button>}<button className="pwa-install-later" type="button" onClick={dismiss}>Agora não</button></section></div>;
}
