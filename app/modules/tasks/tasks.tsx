import Button from "~/components/button/button";
import Card from "~/components/card/card";
import Input from "~/components/input/input";
import { CRAETE_TASK, TASKS } from "~/utils/constants/common";

export function Tasks() {

  const tasks = [
    { 
      id: 1,
      title: "Task 1",
      description: "This is the description for task 1.",
      isCompleted: false,
      isDeleted: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is the description for task 2.",
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is the description for task 3.",
      isCompleted: false,
      isDeleted: true,
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is the description for task 4.",
      isCompleted: true,
      isDeleted: false,
    },
    {
      id: 5,
      title: "Task 5",
      description: "This is the description for task 5.",
      isCompleted: false,
      isDeleted: false,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center m-2">
      <div className="flex flex-col items-center justify-center lg:w-1/4 p-4 m-6 bg-white shadow-lg border border-gray-300 rounded-lg">
        <form className="flex flex-col w-full justify-center text-center">
          <h1 className="text-2xl font-bold mb-4">{CRAETE_TASK}</h1>
          <Input
            type="text"
            placeholder="Enter your task"
            className="border border-gray-300 rounded p-2 mb-4"
          />
          <Input
            type="text"
            placeholder="Enter your task description"
            className="border border-gray-300 rounded p-2 mb-4"
          />
        </form>
        <Button
          title="ADD TASK"
          colorTheme="green"
          textColor="white"
          onClick={() => alert("Button clicked!")}
          loading={false}
        />
      </div>

      <div className="border-l-4 border-gray-500 h-full md:block hidden "></div>
      <div className="border-t-4 border-gray-500 w-32 md:hidden block"></div>

      <div className="flex flex-col items-center justify-center lg:w-1/4 p-4 m-6 bg-white shadow-lg border border-gray-300 rounded-lg overflow-scroll">
        <h1 className="text-2xl font-bold mb-4">{TASKS}</h1>
        <div className="flex flex-col w-full justify-center text-center">
          {tasks.map((task) => (
            <Card
              key={task.id}
              title={task.title}
              description={task.description}
              colorTheme="green"
              textColor="white"
              buttonTitle="DONE"
              buttonColorTheme="yellow"
              buttonTextColor="white"
              onClick={() => alert(`${task.title} completed!`)}
              className="mb-4"
              isCompleted={task.isCompleted}
              isDeleted={task.isDeleted}
              isLoading={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
