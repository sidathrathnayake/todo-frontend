import type { InputProps } from "~/utils/interfaces/input";

const Input = (props: InputProps) => {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange?.(e.target.value)}
      disabled={props.disabled}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
    />
  );
};

export default Input;