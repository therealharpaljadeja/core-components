import Tippy from "@tippyjs/react";
import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
    children: ReactNode;
    content: ReactNode;
    placement?: "top" | "right";
    className?: string;
    withDelay?: boolean;
}

const Tooltip = ({
    placement,
    withDelay,
    className,
    content,
    children,
}: Props) => {
    return (
        <Tippy
            placement={placement}
            duration={0}
            interactive={true}
            arrow={true}
            delay={[withDelay ? 500 : 0, 0]}
            className="hidden sm:block p-2 border-[1px] border-gray-100 bg-gray-900 shadow-lg !text-xs tracking-wide !rounded-lg !leading-6"
            content={<span className={clsx(className)}>{content}</span>}
        >
            <span className="inline-block">{children}</span>
        </Tippy>
    );
};

export default Tooltip;
