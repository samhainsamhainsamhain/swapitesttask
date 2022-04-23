import classes from "./Button.module.css";

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset" | undefined;
  buttonName?: string;
  action?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={classes.button}
      onClick={props.action}
      type={props.buttonType}
    >
      {props.buttonName}
    </button>
  );
}
