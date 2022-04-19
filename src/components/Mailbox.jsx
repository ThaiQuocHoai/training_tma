import React, { useState } from 'react'
import './../assets/css/mail.css';
import MailLeftComponent from './MailLeftComponent';
import MailMidComponent from './MailMidComponent';
import MailRightComponent from './MailRightComponent';

export default function Mailbox() {

  const [nav, setNav] = useState("Inbox");
  const [detail, setDetail] = useState("");

  return (
    <div className='container my-5 mail'>
      <h1>Mailbox App</h1>
      
      <div className='mail-container'>
        <div className='mail-container__leftside'>
          <MailLeftComponent setNav={setNav} setDetail={setDetail} />
        </div>
        <div className='mail-container__midside'>
          <MailMidComponent nav={nav} setDetail={setDetail} />
        </div>
        <div className='mail-container__rightside'>
          <MailRightComponent detail={detail} nav={nav} />
        </div>
      </div>
    </div>
  )
}
