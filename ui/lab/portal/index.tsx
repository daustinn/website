'use client'

import * as PortalPrimitive from '@radix-ui/react-portal'
import React from 'react'

export const Portal = ({ children }: { children: React.ReactNode }) => {
  return <PortalPrimitive.Root asChild>{children}</PortalPrimitive.Root>
}
