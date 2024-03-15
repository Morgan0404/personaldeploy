import { ReactNode } from "react";

interface Props {
  children: ReactNode; // react allows us to put in html content itno the alert
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
