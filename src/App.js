import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Project></Project>
      <About></About>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
}

export default App;
