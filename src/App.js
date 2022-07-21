import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailedPage from "./components/Pages/DetailPage/DetailedPage";
import Main from "./components/Pages/Main/Main";
function App() {
  let idKeyDetail= new Date().getTime();
  let idKeyMain= new Date().getHours();
  //console.log(idKeyMain)
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/irlixpub/" element={<Main key={idKeyMain}/>}/>
        <Route path="/irlixpub/detailed/" element={<DetailedPage key={idKeyDetail} />}/>
      </Routes>        
    </BrowserRouter>
  )
}

export default App;
