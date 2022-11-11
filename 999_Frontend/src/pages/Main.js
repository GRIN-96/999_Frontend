// import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function Main() {
  const [searchPost, setSearchPost] = useState([]);

  return (
    <div className="Main">
      <div>
        <Header />
        <SearchBar setSearchPost={setSearchPost} />
        <Body searchPost={searchPost} />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
