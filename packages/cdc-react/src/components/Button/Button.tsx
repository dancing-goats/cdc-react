import "./Button.scss";

import {
  ButtonAccessibilityThemeTypes,
  ButtonIconPositionTypes,
  ButtonPrimaryColorTypes,
  ButtonSizeTypes,
  ButtonStateTypes,
  ButtonTertiaryColorTypes,
  ButtonVariationsTypes,
} from "../../@types";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  ariaLabel: string;
  className?: string;
  id?: string;
  tabIndex?: number;
  readonly theme?: ButtonAccessibilityThemeTypes;
  readonly size?: ButtonSizeTypes;
  readonly variation?: ButtonVariationsTypes;
  readonly color?: ButtonPrimaryColorTypes | ButtonTertiaryColorTypes;
  readonly state?: ButtonStateTypes;
  readonly inverse?: boolean;
  readonly icon?: React.ReactNode;
  readonly iconPosition?: ButtonIconPositionTypes;
  readonly iconOnly?: boolean;
}

export const Button = ({
  children,
  onClick,
  onKeyDown,
  size,
  theme,
  variation,
  color,
  state,
  inverse,
  icon,
  iconPosition,
  iconOnly,
  className,
  id,
  ariaLabel,
  tabIndex,
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  let classes: string = "cdc-react btn";

  if (size !== undefined) {
    classes += ` ${size}`;
  } else {
    classes += ` default`;
  }

  if (theme !== undefined) {
    classes += ` ${theme}`;
  } else {
    classes += ` primary`;
  }

  if (variation !== undefined) {
    classes += ` ${variation}`;
  } else {
    classes += ` filled`;
  }

  if (color !== undefined) {
    classes += ` ${color}`;
  }

  if (state !== undefined) {
    classes += ` ${state}`;
  }

  if (inverse === true) {
    classes += ` inverse`;
  }

  if (icon !== undefined) {
    classes += ` has-icon`;
  }

  if (iconPosition !== undefined) {
    classes += ` ${iconPosition}`;
  }

  if (iconOnly === true) {
    classes += " icon-only";
  }

  if (className !== undefined) {
    classes += ` ${className}`;
  }

  const disabled: boolean = state === "disabled" ? true : false;

  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex || 0}
      aria-label={ariaLabel}
      id={id}
      className={classes}
      disabled={disabled}>
      {icon && iconPosition === "left" && icon}
      {iconOnly !== true ? children : icon}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
