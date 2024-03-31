'use client'

import React from 'react'
import { CardPreview } from 'ui/components/card-preview'
import { Drawer } from '.'
import { Button } from '..'

export function DrawerPreview() {
  return (
    <CardPreview
      to="/lab/drawer"
      className="grid h-[300px] place-content-center"
    >
      <h2 className="text-center text-lg font-semibold mb-4 text-stone-500">
        <span className="font-bold">Drawer</span>
      </h2>
      <Drawer
        trigger={
          <Button className="bg-white p-3 rounded-xl text-stone-900 font-semibold">
            Open Drawer
          </Button>
        }
      >
        {({ setOpen }) => (
          <div className="h-[600px] p-2 grid place-content-center">
            This is the drawer content
            <Button
              className="p-3 rounded-xl bg-white text-black font-semibold"
              onClick={() => setOpen(false)}
            >
              Close Drawer
            </Button>
          </div>
        )}
      </Drawer>
    </CardPreview>
  )
}
