import { useState } from 'react';
import './App.css';

function App() {
  const numberOfDesk = 15;
  // const basic = 10;
  // let amount = 0;
  const premium = 15;
  const executive = 20;

  
  const [time, setTime] = useState(0);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [checked, setChecked] = useState(false);

  const handlePlus = () => {
    setTime(time + 1)
  }

  // console.log(time)


  const handleMinus = () => {
    if(time !== 0) {
      setTime(time - 1)
    }
  }

  const handleTier = (e) => {
    setChecked(!checked)
    if(e.target.value === "basic") {
      setAmount(amount + 10)
    } else if(e.target.value === "premium") {
      setAmount(amount + 15)
    } else {
      setAmount(amount + 20)
    }
  }





  const getTotal = () => {
    // setTotal(time * basic)
    // console.log(time * basic)
  }


  // console.log(time)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Co-working Space</h1>
      </header>
      <div className="space-available-card">
        <p className="space">Space Available</p>
        <div className="inner-card">
          <div className="small-cards">
            <p className="number">15</p>
            <p className="space-text">Desks</p>
          </div>
          <div className="small-cards">
            <p className="number">10</p>
            <p className="space-text">Individuals</p>
          </div>
          <div className="small-cards">
            <p className="number">5</p>
            <p className="space-text">Team Desks</p>
          </div>
          <div className="small-cards">
            <p className="number">{numberOfDesk}</p>
            <p className="space-text">Available</p>
          </div>
        </div>

        <p className="team-size-text">Size :</p>
        <div className="team-size">
          <div className="tier-card">
            <input type="radio" />
            <p>Individual</p>
          </div>
          <div className="tier-card">
            <input type="radio" />
            <p>Team Desks</p>
          </div>
        </div>

        <p className="tier-text">Membership Tier :</p>
        <div className="tier-cards">
          <div className="tier-card">
            <input type="radio" value={"basic"} onChange={handleTier}/>
            <p>Basic $10 </p>
          </div>
          <div className="tier-card">
            <input type="radio" value={"premium"} onChange={handleTier}/>
            <p>Premium $15 </p>
          </div>
          <div className="tier-card">
            <input type="radio" value={"executive"} onChange={handleTier} />
            <p>Executive $20 </p>
          </div>
        </div>

      

        <div className="buttons">
          {/* <p>Jan 06</p> */}
          <div className="time">
            <button onClick={handleMinus}>-</button>
            <p>{ time > 1 ? ` ${time} hrs ` : ` ${time} hr ` }</p>
            <button onClick={handlePlus}>+</button>
          </div>
        </div>

        <p className="total">Total : ${time * amount} </p>

        <button className="book-btn">Book Desk</button>

      </div>
      
     
    </div>
  );
}

export default App;