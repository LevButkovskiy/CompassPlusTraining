export default function addSubTask(subTaskText, id) {
  return {
    type: "ADD_SUBTASK",
    payload: subTaskText,
    id: id,
  }
}
