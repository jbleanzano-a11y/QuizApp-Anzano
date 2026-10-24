import React from 'react';
import { motion } from 'framer-motion';

export interface QuizButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const QuizButton: React.FC<QuizButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  className = '',
  style,
  onClick,
  type = 'button',
  ...rest
}) => {
  // Styles based on variant
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
          color: '#F8FAFC',
          border: '1px solid rgba(167, 139, 250, 0.4)',
          boxShadow: '0 4px 20px rgba(139, 92, 246, 0.35)'
        };
      case 'secondary':
        return {
          background: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
          color: '#080D1C',
          fontWeight: 700,
          border: '1px solid rgba(56, 189, 248, 0.4)',
          boxShadow: '0 4px 18px rgba(56, 189, 248, 0.3)'
        };
      case 'outline':
        return {
          background: 'rgba(23, 34, 59, 0.6)',
          color: '#F8FAFC',
          border: '1px solid #293650',
          backdropFilter: 'blur(8px)'
        };
      case 'danger':
        return {
          background: 'rgba(239, 68, 68, 0.15)',
          color: '#EF4444',
          border: '1px solid rgba(239, 68, 68, 0.4)'
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: '#A9B4CC',
          border: '1px solid transparent'
        };
    }
  };

  // Styles based on size
  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.45rem 0.9rem',
          fontSize: '0.875rem',
          borderRadius: '10px',
          gap: '0.45rem'
        };
      case 'lg':
        return {
          padding: '0.9rem 1.9rem',
          fontSize: '1.05rem',
          borderRadius: '16px',
          gap: '0.75rem'
        };
      case 'md':
      default:
        return {
          padding: '0.7rem 1.4rem',
          fontSize: '0.95rem',
          borderRadius: '12px',
          gap: '0.6rem'
        };
    }
  };

  const combinedStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    userSelect: 'none',
    textDecoration: 'none',
    outline: 'none',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style
  };

  return (
    <motion.button
      type={type}
      whileHover={!disabled ? { scale: 1.025, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.975 } : {}}
      disabled={disabled}
      style={combinedStyles}
      className={`quiz-button ${className}`}
      onClick={onClick}
      {...(rest as any)}
    >
      {leftIcon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{rightIcon}</span>}
    </motion.button>
  );
};

