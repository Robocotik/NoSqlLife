import type { HTMLAttributes } from 'react';

export interface dataBit {
    onClick: () => void;
    label: string;
} 
export default interface Props extends HTMLAttributes<HTMLDivElement>{
    data: dataBit[];
}