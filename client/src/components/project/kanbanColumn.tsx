import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./kanbanCard";

interface KanbanColumnProps {
  id: string;
  title: string;
  cards: {
    id: string;
    title: string;
    description?: string;
    type: string;
    status: string;
    priority: string;
    reviewer: string;
  }[];
}

const KanbanColumn = ({ id, title, cards }: KanbanColumnProps) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col w-80 p-4 rounded-lg space-y-4 bg-gray-100 dark:bg-gray-700 transition-all ease-in-out"
    >
      <h2 className="font-semibold text-xl mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {cards.map((card) => (
        <KanbanCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description || ""}
          type={card.type}
          priority={card.priority}
        />
      ))}
    </div>
  );
};

export default KanbanColumn;
