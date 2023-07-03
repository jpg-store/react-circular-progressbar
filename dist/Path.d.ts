/// <reference types="react" />
declare function Path({ className, counterClockwise, dashRatio, pathRadius, strokeWidth, striped, style, }: {
    className?: string;
    counterClockwise: boolean;
    dashRatio: number;
    pathRadius: number;
    strokeWidth: number;
    striped?: boolean;
    style?: object;
}): JSX.Element;
export default Path;
