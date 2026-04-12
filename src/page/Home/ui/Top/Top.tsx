import Image from 'next/image';
import { Title } from '@/shared/ui';
import Progress from '@/svg/progress.svg';
import Practic from '@/svg/practic.svg';
import Achiv from '@/svg/achiv.svg';
import Circle from '@/svg/circle.svg';
import LinePc from '@/svg/line-pc.svg';
import LineMobile from '@/svg/line-mobile.svg';
import styles from './styles.module.scss';

const items = [
  {
    title: 'Прогресс',
    Icon: Progress,
  },
  {
    title: 'Практика',
    Icon: Practic,
  },
  {
    title: 'Достижения',
    Icon: Achiv,
  },
];
const itemsMobile = [
  { title: 'Достижения', Icon: Achiv },
  { title: 'Практика', Icon: Practic },
  { title: 'Прогресс', Icon: Progress },
];

export const Top = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Title className={styles.title} type="h1" size="x">
              Онлайн-образование нового поколения
            </Title>

            <p className={styles.suptitle}>
              Мы создаём крупнейшую платформу навыков в России. Курсы от лучших экспертов.
            </p>

            <div className={styles.items}>
              {items.map(({ title, Icon }) => (
                <div key={title} className={styles.wrapperItem}>
                  <div className={styles.item}>
                    <Icon width={33} height={33} />
                    <span>{title}</span>
                  </div>

                  <Circle className={styles.circle} width={20} height={20} />
                </div>
              ))}
            </div>

            <div className={styles.itemsMobile}>
              <div className={styles.topItem}>
                {itemsMobile.slice(0, 1).map(({ title, Icon }) => (
                  <div key={title} className={styles.item}>
                    <Icon width={26} height={26} />
                    <span>{title}</span>
                  </div>
                ))}
              </div>

              <LineMobile width={320} height={48} className={styles.lineMobile} />

              <div className={styles.bottomItems}>
                {itemsMobile.slice(1).map(({ title, Icon }) => (
                  <div key={title} className={styles.item}>
                    <Icon width={26} height={26} />
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <LinePc width={1328} height={48} className={styles.linePc} />
          </div>

          <Image
            fill
            src="/img/pc-bg.webp"
            alt="Background image"
            unoptimized
            fetchPriority="high"
            loading="eager"
            className={styles.imgPc}
          />

          <Image
            fill
            src="/img/mobile-bg.webp"
            alt="Background image"
            unoptimized
            fetchPriority="high"
            loading="eager"
            className={styles.imgMobile}
          />
        </div>
      </div>
    </section>
  );
};
