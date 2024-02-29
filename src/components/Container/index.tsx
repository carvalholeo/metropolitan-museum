import {ReactNode} from "react";

interface ContainerProps {
  children: ReactNode
}

function Container(props: ContainerProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Container;
