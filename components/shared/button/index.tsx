import cn from '@/utils/cn';
import { Loader } from '@mantine/core';
import Link from 'next/link';
import { ButtonProps, ButtonVariant } from './types';

const Button = ({
  href,
  variant = 'filled',
  tonalTheme = 'primary',
  className,
  classNames,
  loading = false,
  disabled = false,
  startIcon = null,
  endIcon = null,
  children,
  fullWidth = false,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  const baseStyles =
    variant !== 'default'
      ? cn(
          'px-3 py-2.5 text-xs sm:text-sm flex items-center justify-center font-medium rounded-xl h-12 transition-all cursor-pointer disabled:cursor-not-allowed',
          (startIcon || endIcon) && 'flex items-center justify-center gap-1',
          fullWidth && 'w-full',
        )
      : '';

  const variantStyles = {
    default: '',
    filled:
      'bg-primary text-gray-100 hover:bg-primary/90 disabled:bg-neutral-200 disabled:text-neutral-400',
    'outlined-primary':
      'border border-primary text-primary hover:bg-primary/10 disabled:text-neutral-500 disabled:border-neutral-500',
    'outlined-gray':
      'border border-neutral-400 text-neutral-800 hover:bg-neutral-200 disabled:text-neutral-500 disabled:border-neutral-500 hover:bg-primary/10 data-[selected="true"]:text-primary data-[selected="true"]:bg-primary/10 ',
    text: 'text-primary hover:bg-primary/10 disabled:text-neutral-500 ',
    elevated:
      'shadow-md bg-white text-primary hover:shadow-lg disabled:bg-primary/10',
    tonal:
      tonalTheme === 'primary'
        ? 'bg-primary text-primary hover:bg-primary/10 disabled:bg-neutral-700'
        : 'bg-white text-gray-100 hover:bg-white/10 disabled:bg-neutral-700',
  };

  const classes = cn(
    baseStyles,
    variantStyles[variant as ButtonVariant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      <span className={classNames?.icon}>{startIcon}</span>
      <span className={cn('flex items-center', classNames?.children)}>
        {loading ? (
          <Loader
            color='var(--primary-color)'
            size='sm'
          />
        ) : (
          children
        )}
      </span>
      <span className={classNames?.icon}>{endIcon}</span>
    </button>
  );
};

export default Button;
