import './App.css';

function App() {
  const numberOfDesk = 15;
  const basic = 10;
  const premium = 15;
  const executive = 20;
  let time;

  return (
    <div className="App">
      <header className="App-header">
          <h1>Co-working Space</h1>
          <p>This is the number of available desks {numberOfDesk}</p>
      </header>
      <div className="cards">
        <div className="card">
          <input type="radio" />
          <p>Basic $10 </p>
        </div>
        <div className="card">
          <input type="radio" />
          <p>Premium $15 </p>
        </div>
        <div className="card">
          <input type="radio" />
          <p>Executive $20 </p>
        </div>
      </div>
      <div className="buttons">
        <button className="book-now">Book</button>
      </div>
    </div>
  );
}

export default App;