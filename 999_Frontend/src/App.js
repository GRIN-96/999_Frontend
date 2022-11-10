import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import SearchBar from "./component/SearchBar";

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <SearchBar />
        <Body />
        <Footer />
      </body>
    </div>
  );
}

export default App;
