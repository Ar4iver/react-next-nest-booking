import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import React from 'react'

type ButtonProps = MuiButtonProps & {
  rounded?: boolean
}

const Button: React.FC<ButtonProps> = ({
  size,
  color,
  variant,
  onClick,
  rounded,
  children,
  ...rest
}) => (
  <MuiButton
    variant={variant || 'contained'}
    size={size || 'large'}
    color={color || 'primary'}
    onClick={onClick}
    className={rounded ? 'button-circle' : 'button'}
    sx={{
      background:
        variant === 'outlined'
          ? 'transparent'
          : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }}
    {...rest}
  >
    {children}
  </MuiButton>
)

export default Button
