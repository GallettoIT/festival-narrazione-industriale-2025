'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

/**
 * Button Component - Festival Narrazione Industriale
 *
 * Bottone standard con styling da Figma:
 * - Border 3px
 * - Padding minimo (poco spazio tra testo e bordo)
 * - Hover effect con inversione colori
 *
 * Figma Reference: border-[3px], padding ridotto
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  className,
  ...props
}: ButtonProps) {

  const baseStyles = 'font-halenoir-regular uppercase border-[3px] transition-all duration-300 inline-block';

  const variantStyles = {
    primary: 'text-fni-white border-fni-white hover:bg-fni-white hover:text-fni-red',
    secondary: 'text-fni-red border-fni-red hover:bg-fni-red hover:text-fni-white',
  };

  const sizeStyles = {
    default: 'text-base md:text-lg px-4 py-1.5',
    large: 'text-lg md:text-xl px-6 py-2',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
