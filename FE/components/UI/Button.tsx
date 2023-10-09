import { DefaultButtonStyle } from "./ButtonStyle";
import { ReactNode } from "react";

interface Props {
  label: string;
  icon?: ReactNode;
  styleOverrides;
}

const DefaultButton = ({
  label,
  icon,
  styleOverrides,
  ...rest
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <DefaultButtonStyle styleOverrides={styleOverrides} {...rest}>
      {icon && icon}
      <div>
        <p>{label}</p>
      </div>
    </DefaultButtonStyle>
  );
};
export default DefaultButton;
