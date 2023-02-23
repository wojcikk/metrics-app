import { useState } from "react";
import thank from "./thank";
import thankS from "./thankS";

// const getFilteredItems = (query: string, items: any[]) => {
//   if (!query) {
//     return items;
//   }
//   return items.filter((song) => song.name.includes(query));
// };

const getFilteredItems = (query: string, items: string[]) => {
  if (!query) {
    return items;
  }
  return items.filter((item) => item.includes(query));
};


export default function App() {
  const [query, setQuery] = useState("");

  const { components_name } = thankS;
  // items looks like this: [{name: 'name1'}, {name: 'name2'}]
  console.log(components_name)
  const filteredItems = getFilteredItems(query, components_name.name);

  return (
    <div className="App">
      <label>Search</label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((value) => (
          <h1 key={value}>{value}</h1>
        ))}
      </ul>
    </div>
  );
}
