import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
import { memo } from 'react';
const CommandmentsSVG = (props: SvgProps) => (
  <Svg viewBox='0 0 64 64' {...props}>
    <Circle cx={50.044} cy={8.014} r={1.069} />
    <Circle
      cx={9.5}
      cy={6.5}
      r={2.5}
      fill={'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      transform='rotate(-72.24 48.331 11.11)'
    />
    <Path
      d='m30 9 3 3M33 9l-3 3M19 15h0a13 13 0 0 1 13 13v28h0H6h0V28a13 13 0 0 1 13-13ZM45 15h0a13 13 0 0 1 13 13v28h0-26 0V28a13 13 0 0 1 13-13ZM12 28h9M12 34h6M12 46h6M12 31h14M38 31h14M38 34h14M21 34h5M12 40h12M12 43h14M38 46h11M45 40h5M38 43h14M42 40h-4'
      fill={'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      transform='rotate(-72.24 48.331 11.11)'
    />
    <Circle
      cx={19}
      cy={21}
      r={2}
      fill={'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      transform='rotate(-72.24 48.331 11.11)'
    />
    <Circle
      cx={45}
      cy={21}
      r={2}
      fill={'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      transform='rotate(-72.24 48.331 11.11)'
    />
  </Svg>
);
const CommandmentsIcon = memo(CommandmentsSVG);
export default CommandmentsIcon;
