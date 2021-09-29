import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hook/useFetch";

function App() {
  const [tasks, setTasks] = useState([]);
  const url =
    "https://react-course-udemy-f670c-default-rtdb.asia-southeast1.firebasedatabase.app/mew4479532214sdvsdCyo9hv458mevtwicouh/tasks.json";

  const { sendRequest: fetchTasks, isLoading, error } = useFetch();
  //applyData in hook call this function

  useEffect(() => {
    const tranformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

      setTasks(loadedTasks);
    }; //ไม่มี dependency เพราะ ไม่ได้ใช้อะไรที่เป็น external มีแค่ setTasks ที่ React มัน confirm ว่ามันจะไม่เปลี่ยนแปลงใน Component นี้อยู่แล้ว

    fetchTasks({ url: url }, tranformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
