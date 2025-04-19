'use client';
import {FC, useState} from 'react';
import type Props from './CalculatorPage.props';
import {PageLayout} from '@/layouts/PageLayout';
import {DropDown} from '../DropDown';
import {data} from './CalculatorPage.usecase';

export const CalculatorPage: FC<Props> = ({className, ...props}) => {
  return (
    <PageLayout className={`${className} bg-white`} {...props}>
      <DropDown data={data} />
    </PageLayout>
  );
};
