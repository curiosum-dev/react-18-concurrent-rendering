import { useState, useTransition } from "react";
import ItemsList from "./ItemsList";

const OptimizedUpdateFilterComponent = () => {
  const [text, setText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearch = (query) => {
    setText(query);
    startTransition(() => setSearchQuery(query));
  };

  return (
    <div>
      <h1>Optimized Update Filter Component</h1>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className="items-container">
        {isPending ? (
          <div className="loader">Loading...</div>
        ) : (
          <ItemsList searchQuery={searchQuery} />
        )}
      </div>
    </div>
  );
};

export default OptimizedUpdateFilterComponent;
