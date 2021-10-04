import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ServicesCourse from './components/ServicesCourse/ServicesCourse';
import Teacher from './components/Teacher/Teacher';
import Testimonial from './components/Teastimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <ServicesCourse></ServicesCourse>
          </Route>
          {/* <Route path="/course/:courseId">
            <CourseDetails></CourseDetails>
          </Route> */}
          <Route path="/teachers">
            <Teacher></Teacher>
          </Route>
          <Route path="/testimonial">
            <Testimonial></Testimonial>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
