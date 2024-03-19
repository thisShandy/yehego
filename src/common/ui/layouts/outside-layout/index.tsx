import type { PropsWithChildren } from "react";

import React, { useRef } from "react";
import { useOutsideAlerter } from "./hooks/useOutsideLayout";

interface IOutsideLayout {
  active: boolean;
  setActive: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

const OutsideLayout: React.FC<PropsWithChildren<IOutsideLayout>> = ({ children, active, setActive }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActive);

  if (!active) return null;

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideLayout;
