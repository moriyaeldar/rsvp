
import wedding from './wedding.jpeg';
import './success.css';

function Success() {

  return (
    <div className="success">
      <header className="App-header">
        <div className="wedding-invite">
         <img src={wedding} className="wedding-invite-img" alt="הזמנה"></img>
        </div>
      </header> 
          <h1>תודה רבה ונפגש בשמחות
          </h1>

    </div>
  );
}

export default Success;
