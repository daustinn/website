'use client'

import { Toaster } from 'anni'

export const UiProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster
        defaultCloseButtonProps={{
          children: 'Cerrar'
        }}
        theme="dark"
        position="bottom-center"
      />
      {children}
    </>
  )
}
