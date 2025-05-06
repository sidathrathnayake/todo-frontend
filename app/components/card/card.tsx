import type { CardProps } from "~/utils/interfaces/card";
import Button from "../button/button";
import clsx from "clsx";

const Card = (props: CardProps) => {
  return (
    <div className={clsx(`border rounded-lg shadow-lg flex flex-col m-2 p-4`,
        `bg-white text-${props.textColor} ${props.className}`,
        `bg-gradient-to-r from-${props.colorTheme}-500 via-${props.colorTheme}-600 to-${props.colorTheme}-700`
    )}>
      <h2 className="text-left text-xl font-bold">{props.title}</h2>
      <p className="text-left">{props.description}</p>
      <div className={`flex flex-col items-end justify-center w-full mt-4`}>
      {props.buttonTitle && (
        <Button
          title={props.buttonTitle}
          colorTheme={props.buttonColorTheme}
          textColor={props.buttonTextColor}
          onClick={props.onClick || (() => {})}
          loading={false}
        />
      )}
      </div>
    </div>
  );
};

export default Card;
