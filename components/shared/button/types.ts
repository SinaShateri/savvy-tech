import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant =
  | 'default'
  | 'filled'
  | 'outlined-primary'
  | 'outlined-gray'
  | 'text'
  | 'elevated'
  | 'tonal';

export interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  tonalTheme?: 'primary' | 'secondary';
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  [key: string]: unknown;
  classNames?: { children?: string; icon?: string };
}
