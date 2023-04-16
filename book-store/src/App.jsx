import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Books from "./components/Book/Books"
import BookDetails from "./components/Book/BookDetails"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<AddBook/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/books/:id" element={<BookDetails/>} exact/>
          <Route path="/about-us" element={<About/>}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
