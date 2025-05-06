import SpinnerIcon from "public/icons/SpinnerIcon";
import type { ButtonProps } from "~/utils/interfaces/button";

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      disabled={props.loading}
      className={`relative flex items-center gap-2 px-5 py-2 text-${props.textColor} bg-${props.colorTheme}-600 rounded hover:bg-${props.colorTheme}-700 disabled:opacity-70 disabled:cursor-not-allowed`}
    >
      {!props.loading && (
        <SpinnerIcon />
      )}
       {props.title}
    </button>
  );
}

export default Button;