import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import useRefState from '../lib/useRefState';
import { MenuOption } from '../lib/Types';

interface NavbarProps {
  color: string;
  options: MenuOption[];
}

export default function Navbar(props: NavbarProps) {

  const [hidden, setHidden] = React.useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useRefState<number>(0);

  function handleScroll() {
    setHidden(
      window.scrollY < 30 ? false : window.scrollY > lastScrollY.current,
    );
    setLastScrollY(window.scrollY);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.navbarContainer}
      style={{
        transform: `translate(0, ${hidden ? '-60px' : '0px'})`,
        transition: 'transform 90ms linear',
      }}
    >
      <div style={{ backgroundColor: props.color }}>
        <ul className={styles.navbar}>
          <li 
            style={{ float: 'left' }}
            className={styles.navbarItem}
          >
            <Link href="/" passHref>
              <div className={styles.navbarBrand}>evanhadam.com</div>
            </Link>
          </li>

          {props.options.map(option => {
            return (
              <li
                style={{ float: 'right' }}
                className={styles.navbarItem}
                key={option.href}
              >
                <Link href={option.href} passHref>
                  <div className={styles.navbarLink}>{option.label}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}