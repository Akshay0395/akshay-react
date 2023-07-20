import ResturantCard from "./ResturantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="" />
      </div>
      <div className="res-container">
        {resData.map((x) => (
          <ResturantCard key={x.resName} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
