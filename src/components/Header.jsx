'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/personagens', label: 'Personagens' },
    { href: '/planetas', label: 'Planetas' },
    { href: '/racas', label: 'Raças' },
            { href: '/contato', label: 'Feedback' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <span className={styles.logoText}>Dragon Ball</span>
          <Image src="/image/simboloz.png" alt="Logo" width={50} height={50} />
        </Link>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu de navegação"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </header>
  );
}