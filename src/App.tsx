//Make sure to save all to see web updates

import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>GoodBye</Alert>
      <ListGroup
        items={items}
        heading="Places"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

//So it can be used somewhere else
export default App;
