import { useState } from "react";
import ItemsList from "./ItemsList";

const SlowUpdateFilterComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Slow Update Filter Component</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="items-container">
        <ItemsList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default SlowUpdateFilterComponent;
