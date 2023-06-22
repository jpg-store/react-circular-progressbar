import * as React from 'react';

function StripPattern({
  style,
}: {
  style?: any;
}) {
  const fill = style && style.fill ? style.fill : 'transparent';
  const stroke = style && style.stroke ? style.stroke : 'grey';

  return (
    <defs>
      <pattern
        id="striped"
        width="3"
        height="10"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(40 50 50)"
      >
        <rect x="0" y="0" width="100%" height="100%" fill={fill}></rect>
        <line stroke={stroke} strokeWidth="2px" y2="10"/>
      </pattern>
    </defs>
  );
}

export default StripPattern;
