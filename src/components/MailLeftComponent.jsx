import React, { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {newMailAction} from "../redux/actions/mailAction";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const menu = [
  {
    name: "Inbox",
  },
  {
    name: "Sent",
  },
  {
    name: "Trash",
  }
];

export default function MailLeftComponent({setNav, setDetail}) {

  const {register, handleSubmit} = useForm()

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeNav, setActiveNav] = useState("");

  const mailRef = useRef(null);
  const angleRef = useRef(null);

  const handleMail = () => {
    // mailRef.current.classList.toggle('mail-active');
    mailRef.current.classList.toggle("active");
    angleRef.current.classList.toggle("active");
  };

  const handleClick = (name) => {
    setActiveNav(name);
    setNav(name);
    setDetail("");
  }

  useEffect(()=>{
    mailRef.current.classList.toggle("active");
    angleRef.current.classList.toggle("active");
    setActiveNav(menu[0].name);
  }, [])

  const onSubmit = (data) => {
    handleClose();
    dispatch(newMailAction(data));

  }

  return (
    <div>
      <button onClick={handleMail}>
        <span className="arrow-mail-folder">
          <ArrowRightIcon ref={angleRef} />
        </span>
        Mail Folders
      </button>
      <ul ref={mailRef}>
        {menu.map((item, index) => (
          <li key={index} onClick={()=>handleClick(item.name)}>
            <h5 className={item.name === activeNav ? 'active-h5' : ''}>{item.name}</h5>
          </li>
        ))}

        <li>
          <button onClick={handleOpen} className="new-email">New e-mail</button>
        </li>
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <p>Subject</p>
              <input {...register('subject')} className="form-control" />
            </div>
            <div className="form-group">
              <p>Content</p>
              <input {...register('content')} className="form-control" />
            </div>
            <div className="form-group">
              <p>To</p>
              <input {...register('to')} className="form-control" />
            </div>
            <div className="form-group">
              <button>Send mail</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
