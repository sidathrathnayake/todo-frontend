import clsx from "clsx";
import SpinnerIcon from "public/icons/SpinnerIcon";
import type { ButtonProps } from "~/utils/interfaces/button";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.loading}
      className={clsx(
        `relative flex items-center gap-2 px-5 py-2 font-bold text-${props.textColor}`,
        `bg-gradient-to-r from-${props.colorTheme}-500 via-${props.colorTheme}-600 to-${props.colorTheme}-700`,
        `rounded hover:from-${props.colorTheme}-600 hover:via-${props.colorTheme}-700 hover:to-${props.colorTheme}-800`,
        `disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed rounded-lg`,
      )}
    >
      {props.loading && <SpinnerIcon />}
      {props.title}
    </button>
  );
}


export default Button;