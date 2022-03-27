import Nav from "./components/Nav";
import PendingHistory from "./components/PendingHistory";
import PendingList from "./components/PendingList";
import style from "./App.module.css"

  

function App() {
  return (
    <div className={style.container}>
      <Nav/>
      <PendingList/>
      <PendingHistory/>
    </div>
  );
}

export default App;
