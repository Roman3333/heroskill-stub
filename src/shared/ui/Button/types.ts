import { ReactNode, MouseEvent, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  /**
   * Контент кнопки.
   */
  children: ReactNode;
  /**
   * Кастомный класс для button.
   */
  className?: string;
  /**
   * Состояние disabled.
   */
  isDisabled?: boolean;
  /**
   * Состояние загрузки в кнопке(показывается spinner).
   */
  isLoading?: boolean;
  /**
   * Колбек на клик по кнопке.
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * Толщина шрифта, по умолчанию semibold(600).
   */
  weight?: 'regular' | 'semibold';
  /**
   * Размер шрифта, по умолчанию m(16px).
   */
  fontSize?: 'm';
  /**
   * Тема кнопки. По умолчанию primary(желтая)
   */
  variant?: 'primary';
}
