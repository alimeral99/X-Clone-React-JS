import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Post from "./Post/Post";
import Widget from "./Widgets/Widget";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Post />
      <Widget />
    </div>
  );
}

export default App;
