import data from "../../data/assignment4";
import { IMG_CHOOSE, NAME_CHOOSE } from "../types/gameType";
import {randomFunc} from "../../helpers/game.helper.js";

let listGame = [];

listGame = randomFunc(3).map((number) => {
  return data[number];
});
const listRandomImg = [...listGame].sort(() => Math.random() - 0.5);
const listRandomName = [...listGame].sort(() => Math.random() - 0.5);

const initialState = {
  listRandomImg,
  listRandomName,
  imgChoosed: 0,
  nameChoosed: -1,
  startTime: 0,
  score:0,
  highestScore:0
};

const GameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case NAME_CHOOSE: {
        return {...state, nameChoosed: payload}
      }
      case IMG_CHOOSE: {
        return {...state, imgChoosed: payload}
      }

      case "START_GAME": {
        return {...state, startTime: state.startTime + 1};
      }

      case "NEXT_LEVEL": {
        listGame=randomFunc(3).map((number) => {
          return data[number];
        });
        if(state.imgChoosed === state.nameChoosed) state.score=state.score +10
        if(state.startTime === 10){
          if(state.highestScore===0){
            state.highestScore = state.score
          }
          if(state.highestScore < state.score){
            state.highestScore = state.score
          }
          return {...state, startTime: 0, score: 0, imgChoosed: 0, nameChoosed: -1};
        }
        return {...state, listRandomImg: [...listGame].sort(() => Math.random() - 0.5), listRandomName: [...listGame].sort(() => Math.random() - 0.5), startTime: state.startTime + 1, imgChoosed: 0, nameChoosed: -1}
      }

    default:
      return state;
  }
};
export default GameReducer;