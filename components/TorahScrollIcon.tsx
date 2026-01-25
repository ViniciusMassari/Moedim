import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

type IconProps = {
  size?: number;
  color?: string;
};

export const TorahScrollIcon: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Rect
        x={4}
        y={4}
        width={4}
        height={16}
        rx={2}
        stroke={color}
        strokeWidth={1.5}
      />

      <Rect
        x={16}
        y={4}
        width={4}
        height={16}
        rx={2}
        stroke={color}
        strokeWidth={1.5}
      />

      <Path d='M8 6h8M8 18h8' stroke={color} strokeWidth={1.5} />

      <Path
        d='M8 9h8M8 12h8M8 15h8'
        stroke={color}
        strokeWidth={1}
        opacity={0.5}
      />
    </Svg>
  );
};
