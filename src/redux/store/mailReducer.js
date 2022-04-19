import { DELETE_MAIL, NEW_MAIL, UNDO_MAIL } from "../types/mailType";
import moment from 'moment';

const initialState = {
  mailData: {
    inbox: [
      {
        id: 1,
        subject: "Mail box 1",
        content: "This is mail box 1 content",
        from: "Mr.A",
        time: "12/04/2022",
      },
      {
        id: 2,
        subject: "Mail box 2",
        content: "This is mail box 2 content",
        from: "Mr.A",
        time: "11/04/2022",
      },
      {
        id: 3,
        subject: "Mail box 3",
        content: "This is mail box 3 content",
        from: "Mr.A",
        time: "10/04/2022",
      },
    ],
    sent: [
      {
        id: 4,
        subject: "Mail sent box 1",
        content: "This is mail box 1 content",
        to: "Mr.A",
        time: "12/04/2022",
      },
      {
        id: 5,
        subject: "Mail sent box 2",
        content: "This is mail box 2 content",
        to: "Mr.A",
        time: "11/04/2022",
      },
      {
        id: 6,
        subject: "Mail sent box 3",
        content: "This is mail box 3 content",
        to: "Mr.A",
        time: "10/04/2022",
      },
    ],
    trash: [
      {
        id: 7,
        subject: "Mail trash box 1",
        content: "This is mail box 1 content",
        to: "Mr.A",
        time: "12/04/2022",
      },
      {
        id: 8,
        subject: "Mail trash box 2",
        content: "This is mail box 2 content",
        to: "Mr.A",
        time: "11/04/2022",
      },
      {
        id: 9,
        subject: "Mail trash box 3",
        content: "This is mail box 3 content",
        from: "Mr.A",
        time: "10/04/2022",
      },
    ],
  },
};

const MailReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case DELETE_MAIL:{
      const {nav, detail} = payload;
      let mailData = {...state.mailData};
      mailData[`${nav.toLowerCase()}`] = mailData[`${nav.toLowerCase()}`].filter((s)=> s.id !== detail.id);
      mailData['trash'].push(detail);
      return {...state, mailData: mailData}
    }

    case UNDO_MAIL:{
      let {nav, detail} = payload;
      if(detail.from){
        nav="inbox";
      } else {
        nav="sent"
      }
      let mailData = {...state.mailData};
      mailData['trash'] = mailData['trash'].filter((s)=> s.id !== detail.id);
      mailData[`${nav.toLowerCase()}`].push(detail);
      mailData[`${nav.toLowerCase()}`].sort((a, b)=>{
        if(a.id >b.id ){
          return 1;
        } else if (a.id < b.id){
          return -1
        } 
        return 0;
      });
      return {...state, mailData: mailData}
    }

    case NEW_MAIL: {
      let mailData = {...state.mailData};
      let sent = mailData.sent;
      payload = {...payload, id: sent.length, time: moment(new Date()).format('DD/MM/yyyy') }
      sent.push(payload);
      console.log(mailData)
      return {...state, mailData: mailData}
    }

    default:
      return state;
  }
};

export default MailReducer;
