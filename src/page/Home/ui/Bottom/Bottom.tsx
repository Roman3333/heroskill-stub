import Image from 'next/image';
import { Title, Button } from '@/shared/ui';
import styles from './styles.module.scss';

export const Bottom = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.iconWrapper}>🚀</div>
              <Title className={styles.title} variant="secondary">
                Будь первым, кто получит доступ и бонус на старте
              </Title>
              <p className={styles.text}>Получить доступ первым + бонус на старте</p>
            </div>

            <Image
              src="/img/image-2.png"
              width={654}
              height={365}
              unoptimized
              alt="Boy"
              className={styles.img}
            />

            <Button className={styles.btn}>Хочу доступ</Button>
          </div>

          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.iconWrapper}>👑</div>
              <Title className={styles.title} variant="secondary">
                Вы эксперт и хотите делиться знаниями с аудиторией?
              </Title>
              <p className={styles.text}>Присоединяйтесь к HeroSkill как автор</p>
            </div>

            <Image
              src="/img/man-2.webp"
              width={654}
              height={365}
              unoptimized
              alt="Boy"
              className={styles.img}
            />

            <Button className={styles.btn}>Я - автор / эксперт</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
