// import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import SearchBar from "../components/SearchBar";

function Main() {
  return (
    <div className="Main">
      <body>
        <Header />
        <SearchBar />
        <Body />
        <Footer />
      </body>
    </div>
  );
}

export default Main;
