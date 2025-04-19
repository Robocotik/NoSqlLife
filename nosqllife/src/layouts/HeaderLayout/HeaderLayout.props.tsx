import type {HTMLAttributes, ReactNode} from 'react';

export default interface Props extends HTMLAttributes<HTMLDivElement> {
  head: ReactNode;
  lhs: ReactNode;
  rhs: ReactNode;
  trailer: ReactNode;
}
