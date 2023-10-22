"use client";

import type { Task } from "@doist/todoist-api-typescript";

type Props = {
  data: Task;
  idx: number;
};

export default function TaskItem(props: Props) {
  const { data, idx } = props;
  return (
    <li
      style={{ border: "1px solid yellow" }}
      id={`task-${idx}`}
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData("text", e.currentTarget.id);
        e.dataTransfer.dropEffect = "move";
      }}
    >
      {data.content}
    </li>
  );
}
