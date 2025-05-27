import * as React from "react";
import treeImage from "../assets/img/tree.png";

function SvgComponent(props) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={114} height={160} viewBox="0 0 54 100" {...props}>
  <image
    href={treeImage}
    x="0"
    y="0"
    width="70"
    height="100"
    preserveAspectRatio="xMidYMid meet"
  />
</svg>

  );
}

export default SvgComponent;
