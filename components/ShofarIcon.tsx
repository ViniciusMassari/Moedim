import * as React from 'react';
import Svg, { Ellipse, Path, SvgProps } from 'react-native-svg';

const ShofarIconSVG = (props: SvgProps) => (
  <Svg
    stroke={props.stroke ?? '#000'}
    viewBox='0 0 64 64'
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path
      d='m23 22 3 3M26 22l-3 3M37.425 10.657c.246 7.808-2.734 26.465-33.686 39.622A2.833 2.833 0 0 0 2 52.88h0a2.819 2.819 0 0 0 3.165 2.8C17.261 54.2 59.858 46.754 59 15'
      fill={'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={2}
    />
    <Path
      d='M36.25 8.783C39.068 12.348 46.651 19.631 59 15c0 0-3.816-9.921-16.114-9.1a3.62 3.62 0 0 1-2.643-.9h0a2.761 2.761 0 0 0-4.043.4h0a2.766 2.766 0 0 0 .05 3.383ZM59 15s-1 9-17 16M33 35s11 3 20-1M31 42s-6.609-1.9-16.8 3.053M35 43a20.884 20.884 0 0 0 8.318 0M9.642 47.539A32.733 32.733 0 0 1 19 48M44 21s-5 4.02-8-.49'
      fill={'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={2}
    />
    <Ellipse
      cx={48.322}
      cy={11.103}
      rx={2}
      ry={6.662}
      fill={'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      transform='rotate(-72.24 48.331 11.11)'
    />
  </Svg>
);

export const ShofarIcon = React.memo(ShofarIconSVG);
