import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/game.css";
import { imgChoose, nameChoose } from "../redux/actions/gameAction";

export default function GameComponent() {
  let { startTime, score, highestScore,listRandomImg, listRandomName, imgChoosed, nameChoosed } =
    useSelector((s) => s.GameReducer);
  const dispatch = useDispatch();
  let [timeDown, setTimeDown] = useState(30);

  const clearAllInterval = () => {
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
  };

  const makeTime = () => {
    let time = 30;
    setInterval(() => {
      setTimeDown(time);
      if (time === 0) {
        clearAllInterval();
        dispatch({
          type: "NEXT_LEVEL",
          payload: startTime + 1,
        });
        if(startTime <=9)
        makeTime();
        startTime ++
      }
      time--;
    }, 1000);
  };

  var startUp = () => {
    clearAllInterval();
    dispatch({
      type: "NEXT_LEVEL",
      payload: startTime + 1,
    });
    if (startTime < 10) makeTime();
  };

  const handleImg = (id) => {
    dispatch(imgChoose(id));
  };
  const handleName = (id) => {
    dispatch(nameChoose(id));
  };

  return (
    <div className="container game">
      <div>
        <h1 className="text-center my-5">Game </h1>
        <div className="d-flex justify-content-between mb-5">
          <h5 className="text-left">Score: {score}</h5>
          <h5 className="text-left">Highest score: {highestScore}</h5>
        </div>
      </div>
      {startTime === 0 ? (
        <div>
          <button
            onClick={() => {
              clearAllInterval();
              dispatch({
                type: "START_GAME",
                payload: startTime + 1,
              });
              makeTime();
              startTime++;
            }}
            className="btn btn-success"
          >
            Start
          </button>
        </div>
      ) : (
        <div className="game__info">
          <div className="game__info__image d-flex flex-column">
            {listRandomImg.map((item, index) => {
              let borderColor = {};
              if (imgChoosed === item.id) {
                borderColor = {
                  border: "5px solid green",
                };
              }
              return (
                <img
                  style={borderColor}
                  onClick={() => handleImg(item.id)}
                  src={item.img}
                  key={index}
                  alt={item.name}
                />
              );
            })}
          </div>
          <div
            style={{ height: 600, width: 150 }}
            className="d-flex flex-column justify-content-between"
          >
            <span className="d-flex justify-content-center">
              Time:
              {timeDown < 10 ? (
                <h5 style={{ marginLeft: 10, color: "red" }}>{timeDown}</h5>
              ) : (
                <h5 style={{ marginLeft: 10 }}>{timeDown}</h5>
              )}
            </span>

                <span>Game: <h5>{startTime}</h5></span>

            <button
              className="btn btn-success"
              onClick={() => {
                startUp();
                startTime++;
              }}
            >
              Next level
            </button>
          </div>
          <div>
            {listRandomName.map((item, index) => {
              let borderColor = {};
              if (nameChoosed === item.id) {
                borderColor = {
                  border: "5px solid green",
                };
              }
              return (
                <div
                  onClick={() => handleName(item.id)}
                  style={borderColor}
                  className="game__info__name"
                  key={index}
                >
                  <h3>{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
