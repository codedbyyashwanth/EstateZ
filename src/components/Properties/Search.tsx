import { Link } from "react-router-dom";
import { majorCitiesInIndia,propertyTypesInIndia, priceRanges, propertySizeRanges } from "../../util/data";

const Search = () => {
      const years: number[] = [];

      for (let year = 2015; year <= 2023; year++) {
            years.push(year);
      }

      return (
            <section className="search_section">
                  <div className="container">
                        <div className="searchs">
                              <div className="search_container">
                                    <div className="search_group">
                                          <input type="text" placeholder="Search For A Property" />
                                          <Link to="/properties/11">
                                          <button className="primary_btn">
                                          <span className="material-symbols-outlined">
                                          search
                                          </span>
                                                <span style={{ fontSize: "1.1rem" }}>
                                                      Find Property
                                                </span>
                                          </button>
                                          </Link>
                                    </div>
                              </div>
                              <div className="filter_container">
                                    <div className="filters">
                                          <div className="filter_group">
                                                <span className="material-symbols-outlined">
                                                      location_on
                                                </span>
                                                <select name="location" id="">
                                                      {
                                                            majorCitiesInIndia.map((city, cityIndex) => {
                                                                  return (
                                                                        <option value={city} key={cityIndex}>{city}</option>
                                                                  )
                                                            })
                                                      }
                                                </select>
                                                <div className="drop_icon">
                                                      <span className="material-symbols-outlined">
                                                            expand_more
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="filter_group">
                                                <span className="material-symbols-outlined">
                                                      apartment
                                                </span>
                                                <select name="location" id="">
                                                      {
                                                            propertyTypesInIndia.map((type, typeIndex) => {
                                                                  return (
                                                                        <option value={type} key={typeIndex}>{type}</option>
                                                                  )
                                                            })
                                                      }
                                                </select>
                                                <div className="drop_icon">
                                                      <span className="material-symbols-outlined">
                                                            expand_more
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="filter_group">
                                                <span className="material-symbols-outlined">
                                                      payments
                                                </span>
                                                <select name="location" id="">
                                                      {
                                                            priceRanges.map((price, priceIndex) => {
                                                                  return (
                                                                        <option value={price.range} key={priceIndex}>${price.minPrice} - ${price.maxPrice}</option>
                                                                  )
                                                            })
                                                      }
                                                </select>
                                                <div className="drop_icon">
                                                      <span className="material-symbols-outlined">
                                                            expand_more
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="filter_group">
                                                <span className="material-symbols-outlined">
                                                      grid_view
                                                </span>
                                                <select name="location" id="">
                                                      {
                                                            propertySizeRanges.map((size, sizeIndex) => {
                                                                  return (
                                                                        <option value={size.range} key={sizeIndex}>{size.minSize} - {size.maxSize} Sq. Feet</option>
                                                                  )
                                                            })
                                                      }
                                                </select>
                                                <div className="drop_icon">
                                                      <span className="material-symbols-outlined">
                                                            expand_more
                                                      </span>
                                                </div>
                                          </div>

                                          <div className="filter_group">
                                                <span className="material-symbols-outlined">
                                                      calendar_month
                                                </span>
                                                <select name="location" id="">
                                                      {
                                                            years.map((year, yearIndex) => {
                                                                  return (
                                                                        <option value={year} key={yearIndex}>{year}</option>
                                                                  )
                                                            })
                                                      }
                                                </select>
                                                <div className="drop_icon">
                                                      <span className="material-symbols-outlined">
                                                            expand_more
                                                      </span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Search;