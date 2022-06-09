import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { globalConfig } from '@/config/global.config';

import { LocaleSwitch } from '@/components/LocaleSwitch';
import { NavItemHeader } from '@/components/NavItemHeader';
import { ThemeSwitch } from '@/components/ThemeSwitch';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Navigation');
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  return (
    <nav className="pb-8 pt-4 sm:pb-16">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <div className="flex justify-between">
        <div className="flex items-center">
          {globalConfig.menuLinks.map((link, index) => (
            <NavItemHeader
              href={link.href}
              text={index === 0 ? '//' : t(link.title)}
              key={link.title}
            />
          ))}
        </div>
        {mounted && (
          <div className="flex items-center align-middlle">
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
        )}
      </div>
    </nav>
  );
}
