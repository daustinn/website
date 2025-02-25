'use client'

import { useLocale } from 'hooks/use-locale'
import { Globe } from 'ui/icons/globe'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { languages } from 'const'
export default function ToggleLanguage() {
  const [locale, changeLocale] = useLocale()
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="dark:text-cyan-400 text-cyan-600 flex gap-2 relative group p-2 uppercase rounded-lg font-medium text-xs items-center hover:opacity-100 data-[state=open]:opacity-100 transition-all">
          <Globe size={20} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            loop
            align="start"
            sideOffset={10}
            className="dark:bg-[#111117] bg-white border border-stone-500/20 p-1 rounded-xl dark:shadow-black/30 shadow-lg"
          >
            <DropdownMenu.RadioGroup
              value={locale}
              onValueChange={(value) => changeLocale(value as never)}
            >
              {Object.entries(languages).map(([key, language]) => {
                return (
                  <DropdownMenu.RadioItem
                    key={key}
                    value={key}
                    className="p-1 flex pl-5 items-center focus-visible:opacity-100 focus:opacity-100 gap-2 outline-none text-sm opacity-30 aria-checked:opacity-100 cursor-pointer rounded-lg hover:opacity-100"
                  >
                    <DropdownMenu.ItemIndicator className="left-0 px-3 absolute">
                      <div className="w-1 aspect-square bg-black dark:bg-white rounded-full"></div>
                    </DropdownMenu.ItemIndicator>
                    {language.name}
                  </DropdownMenu.RadioItem>
                )
              })}
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
