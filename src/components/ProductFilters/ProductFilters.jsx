import "./ProductFilters.css"
export default function ProductFilters(){
    return(
        <div className="productFiltersContainer">
        <ul>
            <li><input type="checkbox" name="filter1" id="1" />Generic</li>
            <li><input type="checkbox" name="filter1" id="1" />Branded</li>
            <li><input type="checkbox" name="filter1" id="1" />Ayurvedic</li>
            <li><input type="checkbox" name="filter1" id="1" />Homeo</li>
            <li><input type="checkbox" name="filter1" id="1" />Doctors best</li>
            <select name="items" className="selection">
                <option value="1">Price</option>
                <option value="1">below 100</option>
                <option value="1">below 350</option>
                <option value="1">below 500</option>
            </select>
            <select name="items" className="selection">
                <option value="1">others</option>
                <option value="1">below 100</option>
                <option value="1">below 350</option>
                <option value="1">below 500</option>
            </select>
        </ul>
        </div>
    );
}