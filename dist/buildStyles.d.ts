import { CircularProgressbarStyles } from './types';
export default function buildStyles({ rotation, strokeLinecap, textColor, textSize, pathColor, pathTransition, pathTransitionDuration, trailColor, backgroundColor, stripColor, stripBackground, }: {
    rotation?: number;
    strokeLinecap?: any;
    textColor?: string;
    textSize?: string | number;
    pathColor?: string;
    pathTransition?: string;
    pathTransitionDuration?: number;
    trailColor?: string;
    backgroundColor?: string;
    stripColor?: string;
    stripBackground?: string;
}): CircularProgressbarStyles;
