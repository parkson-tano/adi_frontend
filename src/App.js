import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routers from "./Routers";
import { AuthProvider } from './context/auth-context';
function App() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  )
}

export default App;
