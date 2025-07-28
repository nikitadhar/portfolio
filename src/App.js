import MainRoutes from "./routes/MainRoutes";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
