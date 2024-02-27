'use client'

import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@utils/cn'
import { Button } from '@components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { on } from 'events'

export type ComboboxOption = {
  label: string
  value: string
}

export type ComboboxProps = {
  options: ComboboxOption[]
  onChange?: (value: string[]) => void
  initialValue?: string[]
}

export function Combobox({ options, onChange, initialValue }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string[]>(initialValue || [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => onChange?.(value), [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='min-w-[200px] justify-between'
        >
          {value.length > 0 ? (
            <>
              {value
                .slice(0, 2)
                .map(val => options.find(option => option.value === val)?.label)
                .join(', ')}
              {value.length > 2 && `, +${value.length - 2}`}
            </>
          ) : (
            'Select categories...'
          )}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='min-w-[200px] w-full p-0'>
        <Command>
          <CommandInput placeholder='Search...' />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {options.map(option => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={currentValue => {
                  setValue(prev =>
                    prev.includes(currentValue)
                      ? prev.filter(v => v !== currentValue)
                      : [...prev, currentValue]
                  )
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value.includes(option.value) ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
