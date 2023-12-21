import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialItems = Array.from(
  { length: 1000 },
  (_, index) => `Item ${index}`
);

const ItemsList = ({ searchQuery }) => {
  const [filteredItems, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = initialItems.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setItems(filtered);
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, [searchQuery]);

  return isLoading ? (
    <div className="loader">Loading...</div>
  ) : (
    <ul className="items-list">
      {filteredItems.map((item) => (
        <li className="item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;

ItemsList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
