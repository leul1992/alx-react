import logo from './HolbertonLogo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
        <hr className="hr"></hr>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email :</label>
        <input name="email" type="email" id="email"></input>
        <label htmlFor="password">Password :</label>
        <input name="password" type="password" id="password"></input>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <hr className="hr"></hr>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
