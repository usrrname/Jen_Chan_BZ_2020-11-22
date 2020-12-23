import React, { ReactNode, ReactElement, HTMLAttributes } from 'react';
import './typography.scss';
import classnames from 'classnames';

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: string;
  children: ReactNode;
  color: string;
}

export const variantsMap: any = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

const returnComp = (variant: string, variantsMap: any) => {
  const comp = variant && variantsMap?.[`${variant}`]
  return comp || 'p'
}

const Typography = ({ variant, color, children }: TypographyProps): ReactElement<TypographyProps> => {

  const Component = returnComp(variant, variantsMap);

  return (

    <Component
      className={classnames({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
      })}
    >
      {children}
    </Component>
  )
}

export default Typography;