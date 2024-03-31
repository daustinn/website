'use client'

import React from 'react'
import { Button } from '..'
import { KeyboardIcon, TimeIcon } from 'icons'
import { AnimatePresence, motion } from 'framer-motion'

type Period = 'AM' | 'PM'
type HourOrMinute = 'hour' | 'minute'
type SelectOrWrite = 'select' | 'write'
type Time = `${string}:${string} ${Period}`
type operation = 'less' | 'more'
type TimeRecover = {
  hour: string
  minute: string
  period: Period
}

type defaultValue = Date | Time

interface TimePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  onDateChange?: (date: Date) => void
  onHourChange?: (hour: string) => void
  onMinuteChange?: (minute: string) => void
  onPeriodChange?: (period: Period) => void
  defaultType?: SelectOrWrite
  defaultValue?: defaultValue
  onOk?: () => void
  onCancel?: () => void
}

const getDefaultValue = (value: defaultValue): TimeRecover => {
  if (value instanceof Date) {
    const hour = formatTwoDigits(value.getHours())
    const minute = formatTwoDigits(value.getMinutes())
    const period = value.getHours() >= 12 ? 'PM' : 'AM'
    return { hour, minute, period }
  }

  const [time, period] = value.split(' ')
  const [hour, minute] = time.split(':')
  return { hour, minute, period: period as Period }
}

const formatTwoDigits = (num: number): string =>
  num < 10 ? `0${num}` : `${num}`

const HOUR_REGEX = /^(0?[1-9]|1[0-2])$/
const MINUTE_REGEX = /^(|0?[0-9]|[1-5][0-9])$/
const HOUR_HANDLE_REGEX = /^(|0?[0-9]|1[0-2])$/
const MINUTE_HANDLE_REGEX = /^(|0?[0-9]|[0-5][0-9])$/

const periods = ['AM', 'PM']

export function TimePicker(props: TimePickerProps) {
  const {
    onChange,
    name,
    onDateChange,
    onMinuteChange,
    onPeriodChange,
    onHourChange,
    defaultType = 'write',
    onOk,
    onCancel
  } = props

  const def = getDefaultValue(props.defaultValue ?? '12:00 AM')
  const [period, setPeriod] = React.useState<Period>(def.period)
  const [hour, setHour] = React.useState<string>(def.hour)
  const [minute, setMinute] = React.useState<string>(def.minute)
  const hourRef = React.useRef<HTMLInputElement>(null)
  const minuteRef = React.useRef<HTMLInputElement>(null)
  const [type, setType] = React.useState<SelectOrWrite>(defaultType)

  const TYPE = {
    select: type === 'select',
    write: type === 'write'
  }
  const DEFAULT_TYPE = {
    select: defaultType === 'select',
    write: defaultType === 'write'
  }

  const TITLE = TYPE.select ? 'Selected' : 'Enter'

  const PASSED_HOUR = HOUR_REGEX.test(hour)
  const PASSED_MINUTE = MINUTE_REGEX.test(minute)

  const ROTATE_INDICATOR = (Number(hour) / 12) * 360 - 30

  const prevHour = React.useRef<string>('12')
  const prevMinute = React.useRef<string>('00')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    const isHour = name === 'hour'

    if (isHour) {
      if (!HOUR_HANDLE_REGEX.test(value)) return
      setHour(value)
      prevHour.current = value
      return
    }

    if (!MINUTE_HANDLE_REGEX.test(value)) return
    setMinute(value)
    prevMinute.current = minute
  }

  const togglePeriod = () => setPeriod(period === 'AM' ? 'PM' : 'AM')

  const updateValue = (operation: operation, state: HourOrMinute) => {
    const h = Number(hour)
    const m = Number(minute)

    const OPERATION = {
      more: operation === 'more',
      less: operation === 'less'
    }

    const State = {
      hour: state === 'hour'
    }

    if (State.hour)
      return OPERATION.more
        ? (setHour(h === 12 ? '01' : formatTwoDigits(h + 1)),
          h === 11 && togglePeriod())
        : (setHour(h === 1 ? '12' : formatTwoDigits(h - 1)),
          h === 12 && togglePeriod())

    OPERATION.more
      ? (setMinute(m === 59 ? '00' : formatTwoDigits(m + 1)),
        m === 59 && updateValue('more', 'hour'))
      : (setMinute(m === 0 ? '59' : formatTwoDigits(m - 1)),
        m === 0 && updateValue('less', 'hour'))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()

      const NAME = {
        hour: e.currentTarget.name === 'hour'
      }

      NAME.hour
        ? updateValue(e.key === 'ArrowUp' ? 'more' : 'less', 'hour')
        : updateValue(e.key === 'ArrowUp' ? 'more' : 'less', 'minute')
      setTimeout(() => {
        const ref = NAME.hour ? hourRef : minuteRef
        ref.current?.focus()
      }, 0)
    }
  }

  const handleBlur = (state: HourOrMinute) => {
    const STATE = {
      hour: state === 'hour'
    }

    const prev = formatTwoDigits(
      Number(STATE.hour ? prevHour.current : prevMinute.current)
    )

    const value = STATE.hour ? hour : minute

    if (!value)
      return STATE.hour ? setHour(prev === '00' ? '01' : prev) : setMinute(prev)

    STATE.hour
      ? PASSED_HOUR
        ? setHour(formatTwoDigits(Number(hour)))
        : setHour(prev === '00' ? '01' : prev)
      : PASSED_MINUTE
      ? setMinute(formatTwoDigits(Number(minute)))
      : setMinute(prev)
  }

  const onEndTimePicker = () => {
    const date = new Date()
    date.setHours(Number(hour) + (period === 'PM' ? 12 : 0))
    date.setMinutes(Number(minute))
    date.setSeconds(0)

    onChange?.({
      target: {
        value: `${hour}:${minute} ${period}`,
        name: name ?? ''
      }
    } as React.ChangeEvent<HTMLInputElement>)
    onDateChange?.(date)
    onHourChange?.(hour)
    onMinuteChange?.(minute)
    onPeriodChange?.(period)
  }

  React.useEffect(() => {
    onEndTimePicker()
  }, [hour, minute, period])

  const inputProps = {
    hour: {
      ref: hourRef,
      onBlur: () => handleBlur('hour'),
      onKeyDown: handleKeyDown,
      onChange: handleChange,
      value: hour,
      name: 'hour',
      placeholder: '00'
    },
    minute: {
      ref: minuteRef,
      onBlur: () => handleBlur('minute'),
      onKeyDown: handleKeyDown,
      onChange: handleChange,
      value: minute,
      name: 'minute',
      placeholder: '00'
    }
  }

  const classname =
    'w-full border-2 outline-none border-transparent transition-all focus:border-lime-600 focus:dark:bg-lime-300/20 dark:dark:bg-[#343832] bg-[#d1ddcf] focus:bg-[#b5e6ad] h-[4.2rem] text-center text-4xl rounded-lg'

  return (
    <div className="p-5 w-[320px] overflow-hidden rounded-3xl dark:shadow-[rgba(0,_0,_0,_0.25)_0px_5px_50px_-12px] dark:bg-[#272b26] bg-[#d8e4d5]">
      <header className="pb-2">
        <p className="text-sm">{TITLE} time</p>
      </header>
      <div className="flex my-2 items-start gap-3 w-full">
        <div className="flex gap-3 font-normal">
          <label className="relative">
            <input className={classname} {...inputProps.hour} />
            <span className="text-sm select-none font-normal">Hour</span>
          </label>
          <span className="font-semibold text-4xl flex flex-col gap-3 mt-5">
            <span className="w-2 rounded-full aspect-square bg-neutral-500 block" />
            <span className="w-2 rounded-full aspect-square bg-neutral-500 block" />
          </span>
          <label>
            <input className={classname} {...inputProps.minute} />
            <span className="text-sm select-none font-normal">Minute</span>
          </label>
        </div>
        <div className="h-[4.2rem] flex flex-col justify-between">
          {periods.map((p) => (
            <Button
              key={p}
              onClick={() => setPeriod(p as Period)}
              className={`first:rounded-t-lg first:border-b-0 last:rounded-b-lg border dark:border-lime-900/50 border-lime-950/40 h-full px-4 ${
                period === p
                  ? 'bg-lime-700 text-white dark:bg-lime-700 dark:text-lime-50'
                  : 'text-lime-700 dark:text-green-200/60'
              }`}
            >
              {p}
            </Button>
          ))}
        </div>
      </div>
      <AnimatePresence initial={DEFAULT_TYPE.write}>
        {TYPE.select && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-4">
              <div className="w-full dark:text-lime-50/50 aspect-square rounded-full dark:bg-[#212521] bg-[#cbdbc7] relative">
                <div className="w-full h-full grid place-content-center">
                  <span className="aspect-square w-2 rounded-full dark:bg-lime-700 bg-lime-800" />
                </div>
                {Array.from({ length: 12 }, (_, i) => {
                  const angle = ((i * (360 / 12) - 90) * Math.PI) / 180
                  const x = 50 + 40 * Math.cos(angle)
                  const y = 50 + 40 * Math.sin(angle)
                  const isSelected = Number(hour) === i + 1
                  return (
                    <React.Fragment key={i}>
                      <div
                        className="absolute z-[1]"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        <Button
                          role="button"
                          aria-checked={isSelected}
                          onClick={() => setHour(formatTwoDigits(i + 1))}
                          className="text-sm hover:scale-105 hover:bg-lime-600/20 select-none dark:aria-checked:text-white w-11 aspect-square aria-checked:text-white flex items-center justify-center rounded-full"
                        >
                          {formatTwoDigits(i + 1)}
                        </Button>
                      </div>
                    </React.Fragment>
                  )
                })}

                <motion.div
                  className="absolute h-[66%] z-[0] pointer-events-none w-[2px]"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%'
                  }}
                  initial={false}
                  animate={{ rotate: ROTATE_INDICATOR }}
                  transition={{
                    type: 'tween',
                    duration: 0.2,
                    ease: 'easeInOut'
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="w-full h-[60%] block bg-lime-800 dark:bg-lime-700" />
                    <div className="dark:bg-lime-700 bg-lime-800 w-11 aspect-square rounded-full absolute -top-[39px] left-[50%] translate-x-[-50%]" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <footer className="flex items-center gap-4 dark:text-neutral-300">
        <Button
          onClick={() => setType(TYPE.write ? 'select' : 'write')}
          className="w-9 dark:hover:bg-lime-400/10 hover:bg-lime-400/30 p-1 rounded-full"
        >
          {TYPE.write ? <TimeIcon className="p-1" /> : <KeyboardIcon />}
        </Button>
        <div className="ml-auto flex gap-4 dark:text-lime-100 text-sm pr-2">
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onOk}>OK</Button>
        </div>
      </footer>
    </div>
  )
}
