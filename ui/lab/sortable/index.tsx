'use client'

import React from 'react'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable'

import { CSS } from '@dnd-kit/utilities'
import {
  DndContext,
  useSensors,
  useSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  DragEndEvent
} from '@dnd-kit/core'

/* eslint-disable @typescript-eslint/member-delimiter-style */
export type ReturnChildren = {
  isDragging?: boolean
  isOver?: boolean
  activeIndex?: number
  isSorting?: boolean
  index?: number
  overIndex?: number
}

export interface SortableItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id' | 'children'> {
  id: string
  children?: React.ReactNode | ((d: ReturnChildren) => React.ReactNode)
}

export type SortableItemList =
  | Array<{ type: 'sortable_item'; props: SortableItemProps }>
  | Array<{ type: 'unknown'; props: unknown; child: React.ReactNode }>

export interface SortableListProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onChange' | 'onChangeIndex'
  > {
  onChange?: (items: string[]) => void
  onChangeIndex?: (oldIndex: number, newIndex: number) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SortableItem = (_: SortableItemProps) => null

function SortableItemPrimitive(props: SortableItemProps) {
  const {
    transform,
    transition,
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    isOver,
    activeIndex,
    isSorting,
    index,
    overIndex
  } = useSortable({
    id: props.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const { children, ...rest } = props

  const finalChildren =
    typeof children === 'function'
      ? children({
          isDragging,
          isOver,
          activeIndex,
          isSorting,
          index,
          overIndex
        })
      : children

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      role="button"
      aria-pressed={isDragging}
      {...rest}
    >
      {finalChildren}
    </div>
  )
}

export function Sortable({
  onChange,
  onChangeIndex,
  children,
  ...rest
}: SortableListProps) {
  const items = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null
    return (child as React.ReactElement<SortableItemProps>).type ===
      SortableItem
      ? {
          type: 'sortable_item',
          props: child.props as SortableItemProps
        }
      : {
          type: 'unknown',
          child
        }
  }) as SortableItemList

  const onlyValidItemsRender = items
    .filter((e) => e.type === 'sortable_item')
    .map((e) => e.props as SortableItemProps)

  // DRAG AND DROP FUNCTIONS
  function handleDragEnd(event: DragEndEvent) {
    const items = onlyValidItemsRender?.map((e) => e.id)
    if (!items) return
    const { active, over } = event
    const oldIndex = items.indexOf(active.id as string)
    const newIndex = items.indexOf(over?.id as string)
    onChangeIndex?.(oldIndex, newIndex)
    onChange && onChange(arrayMove(items, oldIndex, newIndex))
  }
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))
  return (
    <div {...rest}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        {items && items.length > 0 && (
          <SortableContext
            items={onlyValidItemsRender?.map((e) => e.id)}
            strategy={rectSortingStrategy}
          >
            {items.map((item) =>
              item.type === 'sortable_item' ? (
                <SortableItemPrimitive
                  {...item.props}
                  id={item.props.id}
                  key={item.props.id}
                />
              ) : (
                item.child
              )
            )}
          </SortableContext>
        )}
      </DndContext>
    </div>
  )
}
