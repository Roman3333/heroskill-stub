import type { Metadata } from 'next';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { inter } from '@/shared/assets/fonts/fonts';
import '@/app/styles/globals.scss';

const title = 'HeroSkill';
const description = 'Онлайн-образование нового поколения';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Образование', 'сервис образования', 'учеба', 'достижения'],
  openGraph: {
    title,
    description,
    url: 'https://heroskill-stub.netlify.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable}`}>
        <div id="__next">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
