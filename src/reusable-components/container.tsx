import classNames from "classnames";
import { ComponentPropsWithRef, FC } from "react";

export interface ContainerProps extends ComponentPropsWithRef<"div"> {}

const Container: FC<ContainerProps> = ({ children, className, ...rest }) => {
    const baseClassName = "mx-auto w-full md:max-w-5xl";
    return (
        <div className={classNames(baseClassName, className)} {...rest}>
            {children}
        </div>
    );
};

export default Container;
