import React from "react";

export function ArrowComponent(props) {
  return (
    <span className={props.className} onClick={props.onClick} />
  );
}