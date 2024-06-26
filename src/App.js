import { useState } from 'react';
import './App.css';
import { Tier } from './Tier';

function App() {
  
  const [time, setTime] = useState(0);
  const [availableDesks, setAvailableDesks] = useState(15);
  const [individualDesks, setIndividualDesks] = useState(10);
  const [teamDesks, setTeamDesks] = useState(5)
  const [amount, setAmount] = useState(0);
  const [checked, setChecked] = useState(false);

  const handlePlus = () => {
    setTime(time + 1)
  }

  const handleMinus = () => {
    if(time !== 0) {
      setTime(time - 1)
    }
  }

  const handleType = (e) => {
    if(e.target.value === "individual") {
      setIndividualDesks(individualDesks - 1)
      setAvailableDesks(availableDesks - 1)
    } else if(e.target.value === "team") {
      setTeamDesks(teamDesks - 1)
      setAvailableDesks(availableDesks - 1)
      setAmount(amount + 25)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Co-working Space</h1>
      </header>
      <div className="container">
        <div className="space-available-card">
          <p className="space">Space Available</p>
          <div className="inner-card">
            <div className="small-cards">
              <p className="number">15</p>
              <p className="space-text">Desks</p>
            </div>
            <div className="small-cards">
              <p className="number">{individualDesks}</p>
              <p className="space-text">Individuals</p>
            </div>
            <div className="small-cards">
              <p className="number">{teamDesks}</p>
              <p className="space-text">Team Desks</p>
            </div>
            <div className="small-cards">
              <p className="number">{availableDesks}</p>
              <p className="space-text">Available</p>
            </div>
          </div>

          <p className="team-size-text">Type of Desk :</p>
          <div className="team-size">
            <div className="tier-card">
              <input type="radio" value={"individual"} onChange={handleType}/>
              <p>Individual</p>
            </div>
            <div className="tier-card">
              <input type="radio" value={"team"} onChange={handleType}/>
              <p>Team Desks</p>
            </div>
          </div>
          {
            individualDesks < 10 ? <Tier amount={amount} setAmount={setAmount} checked={checked} setChecked={setChecked} /> : " "
          }


          <div className="buttons">
            {/* <p>Jan 06</p> */}
            <div className="time">
              <button onClick={handleMinus}>-</button>
              <p>{ time > 1 ? ` ${time} hrs ` : ` ${time} hr ` }</p>
              <button onClick={handlePlus}>+</button>
            </div>
          </div>

          <p className="discount">{ time > 3 ? "10% discount" : " "}</p>


          <p className="total">{ time > 3 ? `Total : $${time * amount * 0.1}` : `Total : $${time * amount}`} </p>

          <button className="book-btn">Book Desk</button>

        </div>
        <div className="workspace-visibility">
          ###
          More Workspace Visibility In Progress
          ###
        </div>
      </div>
     
    </div>
  );
}

export default App;