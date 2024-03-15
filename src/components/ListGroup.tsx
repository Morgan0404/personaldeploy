import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item: string) = >void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook -> allows us to tap into built in features in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Type annotation for event handler
  // We can add certain conditions to this code a sif statements are still availible for react
  // Cant hardcode in if statements etc unless you have brackets inside

  // No for loops in react so we have to use another way

  // We can make this simplier by making a seperate variable / constant so it looks less complex
  //const message = items.length === 0 ? <p> No item found</p> : null;

  // Or we can make a function called getMessage which can be called at a later date and contains the logic, this can then have paramters

  /*
  const getMessage = () => {
    return items.length === 0 ? <p>Not item found</p> : null;;
  }
 */

  return (
    //using a fragment to wrap its children when using <>
    // in a reeal world example each item should have there id as there key instead of just there name
    //However as our item isnt an established class it wont have an id attribute

    // index shows items index in array when clicked
    // onclick can have a parameter which represents the browser event
    <>
      <h1> {heading}</h1>
      {items.length === 0 && <p>Not item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
