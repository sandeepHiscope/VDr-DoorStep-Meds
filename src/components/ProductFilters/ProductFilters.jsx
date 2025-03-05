import "./ProductFilters.css";
export default function ProductFilters() {
  return (
    <div className="productFiltersContainer">
      <h2>Filter Products</h2>
      <ul>
        <li>
          <input type="checkbox" name="filter1" id="1" />
          <label htmlFor="1">Generic</label>
        </li>
        <li>
          <input type="checkbox" name="filter1" id="4" />
          <label htmlFor="4">Homeo</label>
        </li>
        <li>
          <input type="checkbox" name="filter1" id="2" />
          <label htmlFor="2">Branded</label>
        </li>
        <li>
          <input type="checkbox" name="filter1" id="3" />
          <label htmlFor="3">Ayurvedic</label>
        </li>
        <li>
          <input type="checkbox" name="filter1" id="5" />
          <label htmlFor="5">Doctors best</label>
        </li>
        <div className="selectionCOntainer">
          <select name="items" className="selection1 selection">
            <option value="1">Price</option>
            <option value="1">below 100</option>
            <option value="1">below 350</option>
            <option value="1">below 500</option>
          </select>
          <select name="items" className="selection2 selection">
            <option value="1">others</option>
            <option value="2">below 100</option>
            <option value="3">below 350</option>
            <option value="4">below 500</option>
          </select>
        </div>
      </ul>
    </div>
  );
}
