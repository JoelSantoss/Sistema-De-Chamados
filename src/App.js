import { BrowserRouter } from "react-router-dom";
import RoutesApp from './routes';
import AuthProvider from "./Contexts/auth";
function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
       <RoutesApp/>
     </AuthProvider>
     
    </BrowserRouter>
  );
}

export default App;
