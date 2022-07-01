import Home from "./pages/Home/Home/Home";
import Login from "./pages/Home/Login/Login";
import Profile from "./pages/Home/Profile/Profile";
import Register from "./pages/Home/Register/Register";

import { Routes, Route } from "react-router-dom";

const App = () => {
   return (
      <div>
         <Routes>
            <Route path="/" exact element={<Home />}></Route>

            <Route path="/profile" exact element={<Profile />}></Route>

            <Route path="/login" exact element={<Login />}></Route>

            <Route path="/Register" exact element={<Register />}></Route>
         </Routes>
         {/* <Home /> */}
      </div>
   );
};

export default App;
