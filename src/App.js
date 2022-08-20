import { HashRouter, Route } from "react-router-dom";
import "./styles/styles.css";
import HomePage from "./components/Home/HomePage";
import TweetsPage from "./components/Tweets/TweetsPage";
import PhotosPage from "./components/Photos/PhotosPage";
import Nav from "./components/NavMenu/Nav";
import { ContactsPage } from "./components/Contacts/ContactsPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Route path="/" exact component={HomePage} />
        <Route path="/tweets" component={TweetsPage} />
        <Route path="/photos" component={PhotosPage} />
        <Route path="/contacts" component={ContactsPage} />
      </HashRouter>
    </div>
  );
}

export default App;
