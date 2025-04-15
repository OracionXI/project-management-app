import { Badge } from "@/components/ui/badge";
import { useDraggable } from "@dnd-kit/core";

interface KanbanCardProps {
  id: string;
  title: string;
  description?: string;
  type: string;
  priority: string;
}

const KanbanCard = ({
  id,
  title,
  description,
  type,
  priority,
}: KanbanCardProps) => {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({
      id,
    });

  const transformStyle = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

  // Set badge color based on priority
  const priorityColor =
    priority === "low"
      ? "bg-yellow-500 text-white"
      : priority === "medium"
      ? "bg-orange-500 text-white"
      : priority === "high"
      ? "bg-red-500 text-white"
      : "";

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`bg-white p-6 rounded-lg shadow-lg transition-all ease-in-out dark:bg-gray-800 dark:text-white ${
        isDragging ? "opacity-50" : ""
      } relative flex flex-col justify-between`}
      style={transformStyle}
    >
      <p className="text-sm text-gray-600 dark:text-gray-300">{id}</p>
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>

      {/* Flex container for the badges with better spacing and alignment */}
      <div className="flex justify-between items-center mt-6">
        {/* Type Badge on the left */}
        <Badge className="px-3 py-1 text-sm font-semibold bg-blue-500 text-white rounded-full shadow-md">
          {type}
        </Badge>

        {/* Priority Badge on the right */}
        <Badge
          className={`px-3 py-1 text-sm font-semibold ${priorityColor} text-white rounded-full shadow-md`}
        >
          {priority}
        </Badge>
      </div>
    </div>
  );
};

export default KanbanCard;
