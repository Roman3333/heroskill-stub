import Link from 'next/link';
import clsx from 'clsx';
import Logo from '@/svg/logo.svg';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.line} />

        <div className={styles.wrapper}>
          <Link className={styles.link} href="/">
            <Logo className={styles.logo} width={122} height={34} />
          </Link>

          <div className={clsx(styles.line, styles.mobile)} />

          <div className={styles.right}>
            <p className={styles.text}>Ты герой. Это твой скилл.</p>
            <p className={styles.text}>©HeroSkill 2025</p>
          </div>
        </div>

        <div className={clsx(styles.line, styles.second)} />
      </div>
    </footer>
  );
};
