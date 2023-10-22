import { TodoistApi } from "@doist/todoist-api-typescript";
import type { Task } from "@doist/todoist-api-typescript";
import TaskItem from "./task_item";
import Dropzone from "./dropzone";

async function getTasks() {
  console.log("making request...");
  const api = new TodoistApi(process.env.TODOIST_API_TOKEN || "");
  const tasks = await api.getTasks();
  console.log("request done!");
  return tasks;
}

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <div>
      <table>
        <tr>
          <td>
            <Dropzone name="Do" />
          </td>
          <td>
            <Dropzone name="Decide" />
          </td>
        </tr>
        <tr>
          <td>
            <Dropzone name="Delegate" />
          </td>
          <td>
            <Dropzone name="Delete" />
          </td>
        </tr>
      </table>
      <ul>
        {tasks.map((task, idx) => {
          return <TaskItem data={task} idx={idx} key={`task-${idx}`} />;
        })}
      </ul>
    </div>
  );
}
