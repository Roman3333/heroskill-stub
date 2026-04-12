type THeading = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export interface TitleProps extends THeading {
  /**
   * Контент title.
   */
  children: React.ReactNode;
  /**
   * Тип title, по умолчанию h3.
   */
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Размер шрифта title, по умолчанию l(30/36).
   */
  size?: 'l' | 'x';
  /**
   * Цвет title, по умолчанию primary(белый).
   */
  variant?: 'primary' | 'secondary';
  /**
   * Font-weight title, по умолчанию semibold(600).
   */
  weight?: 'regulary' | 'bold';
  /**
   * Кастомный класс для title.
   */
  className?: string;
}
