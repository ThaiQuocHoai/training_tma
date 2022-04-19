import { DELETE_MAIL, NEW_MAIL, UNDO_MAIL } from "../types/mailType";

export const deleteMailAction = (payload) => ({
  type: DELETE_MAIL,
  payload
})
export const undoMailAction = (payload) => ({
  type: UNDO_MAIL,
  payload
})
export const newMailAction = (payload) => ({
  type: NEW_MAIL,
  payload
})
