'use client'

import { useLocale } from '~hooks/use-locale'
import { Globe } from '~ui/icons/globe'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { languages } from '~const'
import { Check, ChevronDown } from '~ui/icons'
export default function LanguageToggle() {
  const [locale, changeLocale] = useLocale()
  const currentLocale =
    languages[locale as keyof typeof languages] || languages.en
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex gap-2 relative group p-2 rounded-lg font-medium text-xs items-center hover:opacity-100 data-[state=open]:opacity-100 transition-all">
        <Globe size={17} />
        {currentLocale?.name}
        <ChevronDown className="group-data-[state=open]:rotate-180 transition-transform" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          loop
          align="center"
          sideOffset={10}
          className="dark:bg-[#141210] bg-white shadow-[0_3px_15px_rgba(0,0,0,.08)] dark:shadow-[0_3px_30px_rgba(0,0,0,.7)] border border-stone-500/20 rounded-xl z-20 min-w-[200px]"
        >
          <DropdownMenu.RadioGroup
            value={locale}
            onValueChange={(value) => changeLocale(value as never)}
            className="p-1"
          >
            {Object.entries(languages).map(([key, language]) => {
              return (
                <DropdownMenu.RadioItem
                  key={key}
                  value={key}
                  className="p-2 dark:hover:bg-stone-500/20 hover:bg-stone-500/10 dark:focus:bg-stone-500/20 focus:bg-stone-500/10 flex px-2 items-center gap-2 outline-none text-sm cursor-pointer rounded-lg"
                >
                  {language.name}
                  <DropdownMenu.ItemIndicator className="ml-auto px-1">
                    <Check size={15} />
                  </DropdownMenu.ItemIndicator>
                </DropdownMenu.RadioItem>
              )
            })}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
