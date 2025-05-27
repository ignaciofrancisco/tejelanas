import * as React from "react";
import Logofooter from "../../assets/img/tree.png";


function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={114} height={160} viewBox="0 0 54 100" {...props}>
      <image
        href={Logofooter}
        x="0"
        y="0"  // Mantén esta posición o ajusta
        width="100"
        height="100"
      />
    </svg>
  );
}

export default SvgComponent;
