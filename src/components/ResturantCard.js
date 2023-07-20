// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };
const ResturantCard = (props) => {
  //Destructuring(JS concept)
  // const ResturantCard = ({ resName, cuision }) => {

  const { resName, cuision, deleveryTime, rating } = props.resData;

  return (
    // <div className="res-card" style={styleCard}>
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://img.freepik.com/free-vector/sandwich-with-cheese-vegetable-cartoon-style_1308-92384.jpg?w=1380&t=st=1689770530~exp=1689771130~hmac=4d0c8b21780d6cc270a15faeaf0a39a892bad0e51513deb0ab5506fe779ddbe6"
      />
      <h3>{resName}</h3>
      <h4>{cuision.join(",")}</h4>
      {/* <h3>{resName}</h3>
      <h4>{cuision}</h4> */}
      <h4>{rating} stars</h4>
      <h4>{deleveryTime} minutes</h4>
    </div>
  );
};

export default ResturantCard;
