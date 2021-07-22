import React from "react";
import { Navbar } from './components/Navbar'
import { BrowserRouter  ,Switch ,Route} from "react-router-dom";
import { TodosPage } from "./Pages/TodosPage";
import { AboutPage } from "./Pages/AboutPage";


export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
       <Switch>
         <Route exact path='/' component={TodosPage}/>
         <Route path="/about" component={AboutPage} />
       </Switch>
      </div>
    </BrowserRouter>
  )
}
