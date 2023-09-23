import { useState } from 'react';
import logo from './logo.png';
import wedding from './wedding.jpeg';
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {GiConfirmed} from 'react-icons/gi'
import {CgCloseO} from 'react-icons/cg'
import './App.css';

function App() {
  const [food, setFood] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [isComing, setIsComing] = useState(false);

	const  handleChange = (event,type) => {
		type === 'name' ? setName(event?.target?.value) : setFood(event?.target?.value)
	};
 const onSubmit = () => {
  const data = {"name": name,
                "amount":amount,
                "isComing":isComing,
                "food":food};
console.log(data)
  var url = 'https://sheet2api.com/v1/Z3JozeTrR6K5/-/';
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
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
        <span>ביום שלישי ה-09.10.2023
        </span>כנות , Laraב
        </div>
      </header> 
     <img src={logo} className="App-logo" alt="logo" />
      <div className="rsvp">
        <form onSubmit={onSubmit}>
          <div className='input'>
         <label>שם מלא</label>
         <input name='name' value={name} onChange={(event)=>handleChange(event,'name')}/>
         </div>
        <h5>כמה אורחים מגיעים</h5>
        <div className="amount">
         <AiOutlineMinusCircle onClick={() => setAmount(amount-1)}/>
        <span className="amount-num">{ amount > 0 ? amount : '-'}</span>
        <AiOutlinePlusCircle onClick={()=>setAmount(amount+1)}/>
        </div> 
         <div className='input'>
         <label>אוכל מיוחד - צמחוני/טבעוני/צליאקי/כשרות מהודרת, במידה ורלוונטי אנא כתוב/י מטה את האפשרות הרלוונטית</label>
         <input name='food' value={food} onChange={(event)=>handleChange(event,'food')}/>
         </div>
        <span className="bold">אנא אשרו הגעתכם</span>
        <div className="confirmation"> 
          <div className="column" onClick={() => setIsComing(true)}>
         <GiConfirmed className={isComing? 'green' : 'white'}/>
      <span>מגיע/ה</span>
       </div> 
          <div className="column" onClick={() => setIsComing(false)}>
            <CgCloseO className={isComing? 'white' :'red' }/>
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
