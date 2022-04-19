import React from "react";
import { useDispatch } from "react-redux";
import { deleteMailAction, undoMailAction } from "../redux/actions/mailAction";

export default function MailRightComponent({ detail, nav }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMailAction({ nav, detail }));
  };

  const handleUndo = () => {
    dispatch(undoMailAction({ nav, detail }));
  };

  return (
    <div className="right">
      <h3>{detail.subject}</h3>
      <h5>{detail.content}</h5>

      <span className="addition">
        {detail.from ? (
          <span>
            From: {detail.from}, {detail.time}
          </span>
        ) : (
          ""
        )}
      </span>
      <span className="addition">
        {detail.to ? (
          <span>
            To: {detail.to}, {detail.time}
          </span>
        ) : (
          ""
        )}
      </span>
      {detail && detail !== undefined ? (
        <>
          {nav === "Trash" ? (
            <button onClick={handleUndo}>Undo</button>
          ) : (
            <button onClick={handleDelete}>Delete</button>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
