import { useState } from 'react';
import axios from "axios";
import logo from './logo.png';
import wedding from './wedding.jpeg';
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {GiConfirmed} from 'react-icons/gi'
import {CgCloseO} from 'react-icons/cg'
import {CiCircleQuestion} from 'react-icons/ci'
import './App.css';

function App() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [special, setSpecial] = useState("");
  const [amount, setAmount] = useState(0);
  const [isComing, setIsComing] = useState(null);

	const  handleChange = (event,type) => {
		type === 'name' ? setName(event?.target?.value) : setPhone(event?.target?.value)
	};
 const onSubmit = () => {
  const data = {"name": name,
                "amount":amount,
                "phone":phone,
                "isComing":isComing === null ? 'לא יודע עדיין' : isComing,
                "special": special};
  var url = 'https://sheet2api.com/v1/Z3JozeTrR6K5/-/';
  axios.post(url, data,{
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*'
    },
}).then((response) => {
    console.log(response.status);
  });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="wedding-invite">
         <img src={wedding} className="wedding-invite-img" alt="הזמנה"></img>
        </div>
        <div className="invite-txt">
        <span>אור ממן ואוריאל זילברברג מתרגשים להזמינכם לחגוג את יום שמחתם</span>
        <span>ביום שלישי ה-09/10/2023
        </span>כנות , Laraב
        </div>
      </header> 
     <img src={logo} className="App-logo" alt="logo" />
      <div className="rsvp">
        <form onSubmit={onSubmit}>
          <div className='input'>
         <label>שם מלא</label>
         <input name='name' value={name} onChange={(event)=>handleChange(event,'name')} required/>
         </div>
          <div className='input'>
         <label>מספר טלפון</label>
         <input name='phone' value={phone} onChange={(event)=>handleChange(event,'phone')} required/>
         </div>
       
        <div className='input'>
        <label htmlFor="special-option">אוכל מיוחד</label>
<select name="special" id="special-option" required onChange={(ev) => setSpecial(ev.target.value)}>
  <option value="צמחוני">צמחוני</option>
  <option value="טבעוני">טבעוני</option>
  <option value="צליאקי">צליאקי</option>
  <option value="כשרות מהודרת">כשרות מהודרת</option>
  <option value="אין צורך באוכל מיוחד">אין הערות מיוחדות</option>
</select>
 <h5>כמה אורחים מגיעים</h5>
        <div className="amount">
         <AiOutlineMinusCircle onClick={() => setAmount(amount-1)}/>
        <span className="amount-num">{ amount > 0 ? amount : '-'}</span>
        <AiOutlinePlusCircle onClick={()=>setAmount(amount+1)}/>
        </div> 
         </div>
        <span className="bold">אנא אשרו הגעתכם</span>
        <div className="confirmation"> 
          <div className="column" onClick={() => setIsComing(true)}>
         <GiConfirmed className={isComing? 'green' : 'white'}/>
      <span>מגיע/ה</span>
       </div>
        <div className='column' onClick={() => setIsComing(null)}>
            <CiCircleQuestion className={isComing === null? 'grey' :'white' }/>
            <span>עדיין לא יודע/ת</span>
          </div>
          <div className="column" onClick={() => setIsComing(false)}>
            <CgCloseO className={!isComing&& isComing !== null ? 'red' :'white' }/>
          <span>לא מגיע/ה</span> 
          </div>
          
        </div> 
         <button>שליחה</button>
        </form>
      </div>
    </div>
  );
}

export default App;
