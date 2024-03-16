import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  let items = ["Project 1", "Project 2", "Projec 3", "Project 4", "Project 5"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Navbar /> {/* Add the Navbar component here */}
      <ListGroup
        items={items}
        heading="Work in progress: "
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
