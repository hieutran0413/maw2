// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1267 400"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1235.37 326.773c-392.549 97.062-811.325 97.062-1203.876 0C14.496 322.274-.314 307.324.005 292.356V19.561C.392 6.294 15.271-3.784 31.494 1.376c392.551 97.061 811.327 97.061 1203.876 0 15.13-3.515 32.82 3.653 31.49 18.185v272.795c-.32 14.643-13.9 30.317-31.49 34.427v-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
