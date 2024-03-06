import {ThemeProvider, BaseStyles} from '@primer/react';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div className="App">
          <header className="App-header">
            <img src="Octocat.png" className="App-logo" alt="logo" />
            <p>
              GitHub Codespaces <span className="heart">♥️</span> React
            </p>
            <p className="small">
              Edit <code>src/App.jsx</code> and save to reload.
            </p>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </p>
          </header>
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
