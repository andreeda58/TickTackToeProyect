import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../App';
import Login from '../components/login';
import { BrowserRouter } from 'react-router-dom';
import { JoinRoom } from '../components/joinRoom';
import { Game } from '../components/game';

//App
test("App renders", async () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                 <App />
            </BrowserRouter>
        </React.StrictMode>,
      div
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

//Login
test('Test login render', async () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <React.StrictMode>
          <BrowserRouter>
               <Login />
          </BrowserRouter>
      </React.StrictMode>,
    div
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
})
test('Test login ', () => {
  let login = new Login({});
  login.state = {userName: "testUser", Password: "testPassword"};
  expect(login.state.userName).toBe("testUser");
} )

//JoinRoom
test('Test joinRoom render', async () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                 <JoinRoom />
            </BrowserRouter>
        </React.StrictMode>,
      div
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
})

//Game
test('Test game render', async () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <React.StrictMode>
          <BrowserRouter>
               <Game />
          </BrowserRouter>
      </React.StrictMode>,
    div
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  })

