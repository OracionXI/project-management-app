"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "../ui/button";
import KanbanColumn from "./kanbanColumn";

interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  type: string;
  status: string;
  priority: string;
  reviewer: string;
}

interface Props {
  data: KanbanCard[];
}

export default function KanbanBoard({ data }: Props) {
  // Group the data by status
  const groupByStatus = (cards: KanbanCard[]) => {
    return cards.reduce((acc, card) => {
      const { status } = card;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(card);
      return acc;
    }, {} as Record<string, KanbanCard[]>);
  };

  const [initData, setData] = useState(groupByStatus(data));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const fromColumn = Object.keys(initData).find((column) =>
        initData[column].some((card) => card.id === active.id)
      );
      const toColumn = over.id;

      if (fromColumn && toColumn) {
        if (fromColumn === toColumn) {
          const updatedColumn = initData[fromColumn].map((card) =>
            card.id === active.id ? { ...card, title: card.title } : card
          );
          setData({ ...initData, [fromColumn]: updatedColumn });
        } else {
          const activeCard = initData[fromColumn].find(
            (card) => card.id === active.id
          );
          const fromColumnData = initData[fromColumn].filter(
            (card) => card.id !== active.id
          );
          const toColumnData = [activeCard!, ...initData[toColumn]];

          setData({
            ...initData,
            [fromColumn]: fromColumnData,
            [toColumn]: toColumnData,
          });
        }
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-row-reverse justify-end sm:flex-row sm:justify-between items-center mb-5 px-2 lg:px-6">
        <div></div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <IconPlus />
            <span>Add Section</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
        {Object.entries(initData).map(([status, cards]) => (
          <KanbanColumn
            key={status}
            id={status}
            title={status.charAt(0).toUpperCase() + status.slice(1)}
            cards={cards}
          />
        ))}
      </div>
    </DndContext>
  );
}
