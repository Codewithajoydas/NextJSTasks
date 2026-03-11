"use client";
import './style/css/button.css'
/**
 * Button Component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {"primary" | "secondary" | "ghost" | "link" | "text"} props.type
 * @param {React.CSSProperties} [props.styles]
 * @param {React.EventHandler} [props.clickfn]
 */


export const Button = ({ children, type, styles, clickfn, ...props }) => {
  return (
    <button
      {...props}
      className={`${type} ${props.className}`}
      style={{ ...styles }}
      onClick={clickfn}
    >
      {children}
    </button>
  );
};
