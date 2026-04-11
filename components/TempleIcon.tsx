import * as React from 'react';
import { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox='0 0 640 640'
    {...props}
    stroke={props.stroke ?? '#000'}
    width={props.width ?? 24}
    height={props.height ?? 24}
  >
    <Path d='M48 144c0-35.3 28.7-64 64-64s64 28.7 64 64v32H48v-32zm0 368V224h128l126.2-84.2c10.7-7.2 24.8-7.2 35.5 0L463.9 224h128v288c0 35.3-28.7 64-64 64H112c-35.3 0-64-28.7-64-64zm544-336H464v-32c0-35.3 28.7-64 64-64s64 28.7 64 64v32zM256 448v80h128v-80c0-35.3-28.7-64-64-64s-64 28.7-64 64zm64-152c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z' />
  </Svg>
);
export const TempleIcon = memo(SvgComponent);
