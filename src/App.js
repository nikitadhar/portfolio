import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    // <div className="flex flex-col h-screen bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
   <div className="flex flex-col min-h-screen bg-[#192e39] font-poppins"> 
    <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
