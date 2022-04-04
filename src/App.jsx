import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from './context/AppContextProvider';
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css"

/**
 * The starting page for your App
 */

class App extends Component{
  render(){
    return(
      <AppContextProvider>
        <BrowserRouter>
          <Header />
          <main>
            <section>
                <Routes>
                  <Route path={"/"} element={<Home />} />
                </Routes>
            </section>
          </main>
        </BrowserRouter>
      </AppContextProvider>

    );
  }
}

export default App;