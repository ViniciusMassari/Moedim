import * as React from 'react';
import { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    stroke={props.stroke ?? '#000'}
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox='0 0 640 640'
    {...props}
  >
    <Path d='M320 32c7 0 13.7 3.1 18.3 8.5l136 160c6.1 7.1 7.4 17.1 3.5 25.6-3.9 8.5-12.4 13.9-21.8 13.9h-24.9l75.2 88.5c6.1 7.1 7.4 17.1 3.5 25.6-3.9 8.5-12.4 13.9-21.8 13.9h-38.5l88.8 104.5c6.1 7.1 7.4 17.1 3.5 25.6-3.9 8.5-12.4 13.9-21.8 13.9H352v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64H120c-9.4 0-17.9-5.4-21.8-13.9-3.9-8.5-2.6-18.5 3.5-25.6L190.5 368H152c-9.4 0-17.9-5.4-21.8-13.9-3.9-8.5-2.6-18.5 3.5-25.6l75.2-88.5H184c-9.4 0-17.9-5.4-21.8-13.9-3.9-8.5-2.6-18.5 3.5-25.6l136-160C306.3 35.1 313 32 320 32z' />
  </Svg>
);
export const TreeIcon = memo(SvgComponent);
