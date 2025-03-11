import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

import './App.css';

const App: React.FC = () => {
  return (
    <>
      {/*Nav component renders the nav bar */}
      <Nav />
      <main className="main-content">
        {/*Outlet component renders the child components of the App component */}
        <Outlet />
      </main>
    </>
  );
}

export default App;
