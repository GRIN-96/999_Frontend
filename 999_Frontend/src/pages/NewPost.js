// import "./App.css";
import NewPost_Header from "../components/NewPost_Header";
import NewPost_Body from "../components/NewPost_Body";
import Footer from "../components/Footer";

function NewPost() {
  return (
    <div className="NewPost">
      <div>
        <NewPost_Header />
        <NewPost_Body />
        <Footer />
      </div>
    </div>
  );
}

export default NewPost;
