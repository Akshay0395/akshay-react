import ResturantCard from "./ResturantCard";
import { resData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Super powerful variable
  // [variable,function_name(to update the variable)]

  // const arr = useState(resData)
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // or
  // const listOfRestaurants = arr[0]
  // const setListOfRestaurants = arr[1]
  const [listOfRestaurants, setListOfRestaurants] = useState(resData); //setting default value to listOfResturent for that we pass value as a argument in useState

  // Normal JS Variable
  // let listOfRestaurants = resData;
  return (
    <div className="body">
      <div className="filter">
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(resData.filter((x) => +x.rating > 4));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((x) => (
          <ResturantCard key={x.resName} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
