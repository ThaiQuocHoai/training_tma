import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MailMidComponent({nav, setDetail}) {
  const { mailData } = useSelector((s) => s.MailReducer);
  const [selectedMail, setSelectedMail] = useState(nav);

  const data = mailData[`${nav.toLowerCase()}`];

  const [render, setRender] = useState(false);

  useEffect(()=>{
    setSelectedMail("");
  }, [nav])

  const handleClick = (item) => {
    setSelectedMail(item.id);
    setDetail(item);
  };

  const sortByDate = () => {
    data.sort((a,b)=>{
      if(a.time > b.time) {
        return 1
      } else if (a.time < b.time) {
        return -1
      } 
      return 0
    })
    setRender(!render);
  }
  const sortByName = () => {
    data.sort((a,b)=>{
      if(a.subject>b.subject) {
        return 1
      } else if (a.subject<b.subject) {
        return -1
      } 
      return 0
    })
    setRender(!render);
  }

  const clearSort = () => {
    data.sort((a,b)=>{
      if(a.id > b.id) {
        return 1
      } else if (a.id < b.id) {
        return -1
      } 
      return 0
    })
    setRender(!render);
  }

  return (
    <div>
      <div className="button-header">
        <button onClick={sortByDate}>Sort by date</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={clearSort}>clear</button>
      </div>
      <div className="mail-name">
        {data?.map((item, index) => {
          let style = {};
          if (item.id === selectedMail) {
            style = {
              backgroundColor: "lightgray"
            };
          }

          return <div
            style={style}
            className="mail-name__detail"
            key={index}
            onClick={()=>handleClick(item)}
          >
            <div className="dot">•</div>
            <div className="mail-name__detail__item">
              <span className="subject">{item.subject}</span>
              {/* <span className="content">{item.content}</span> */}
              <span className="addition">{item.from ? <span>From: {item.from}, {item.time}</span>: ''}</span>
              <span className="addition">{item.to ? <span>To: {item.to}, {item.time}</span>: ''}</span>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
