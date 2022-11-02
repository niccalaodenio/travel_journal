import data from "./data"
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  let Cards = data.map(items => <Card key={items.id} {...items}/>)
  return (
    <>
      <Navbar/>
       <div className="card">{Cards}</div>
    </>
  );
}

export default App;
