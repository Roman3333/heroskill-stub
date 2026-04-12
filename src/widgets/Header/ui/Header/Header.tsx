import Link from 'next/link';
import Logo from '@/svg/logo.svg';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.link}>
            <Logo className={styles.logo} width={183} height={51} />
          </Link>
        </div>
      </div>
    </header>
  );
};
