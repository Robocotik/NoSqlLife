'use client'

import type { FC } from 'react'
import Props from './AboutPage.props'
import { PageLayout } from '@/layouts/PageLayout'
export const AboutPage:FC<Props> = ({className}) => {
  return(
    <PageLayout className={`${className}`}>

    </PageLayout>
  )
}