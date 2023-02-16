const first_case = {
  name: "first_case",
  created_task: "2021-10-26T19:48:12+00:00",
  end_task: null,
};

const second_case = {
  name: "second_case",
  created_task: "2021-09-26T19:48:12+00:00",
  end_task: "2021-10-26T19:48:12+00:00",
};

const retrieve_seconds = (object) => {
  const created_task = new Date(object.created_task);
  const end_task = object.end_task ? new Date(object.end_task) : new Date();

  return end_task.getTime() / 1000 - created_task.getTime() / 1000;
};

console.log(retrieve_seconds(second_case));
console.log(retrieve_seconds(first_case));
