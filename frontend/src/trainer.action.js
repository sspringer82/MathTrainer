export const GET_TASK = Symbol('GET_TASK');
export const GET_TASK_SUCCESS = Symbol('GET_TASK_SUCCESS');

export const getTask = () => ({ type: GET_TASK, payload: null });

export const getTaskSuccess = task => ({
  type: GET_TASK_SUCCESS,
  payload: task,
});
