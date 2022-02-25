import { useRoutes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// styles
import "./App.css";

// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import routes from "./routes";
import OnlineUsers from './components/OnlineUsers'

function App() {
  const { authIsReady, user } = useAuthContext();
  const routing = useRoutes(routes(user));

  return (
    <div className="App">
      {authIsReady ? (
        <>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
              {routing}
          </div>
          {user && <OnlineUsers />}
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default App;
