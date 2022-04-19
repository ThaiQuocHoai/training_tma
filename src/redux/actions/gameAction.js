import { IMG_CHOOSE, NAME_CHOOSE } from "../types/gameType";

export const nameChoose = (payload) => ({
  type: NAME_CHOOSE,
  payload
})
export const imgChoose = (payload) => ({
  type: IMG_CHOOSE,
  payload
})
