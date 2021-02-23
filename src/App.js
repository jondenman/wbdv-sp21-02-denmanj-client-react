import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router-dom';
import Home from "./components/home"

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/" exact={true}>
                  <Home/>
              </Route>
              <Route path="/courses">
                  <CourseManager/>
              </Route>
          </div>
      </BrowserRouter>
      // <BrowserRouter>
      //   <div className="container-fluid">
      //     <CourseManager/>
      //   </div>
      // </BrowserRouter>
  );
}

export default App;
