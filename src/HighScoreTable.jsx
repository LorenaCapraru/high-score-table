import React, { useState } from "react";

export default function HighScoreTable(props) {
  const sortedCountries = [...props.data].sort((a, b) => {
    let sortedA = a.name;
    let sortedB = b.name;
    if (sortedA > sortedB) return 1;
    else if (sortedB > sortedA) return -1;
    else return 0;
  });

  const [ascending, setAscending] = useState([...sortedCountries]);
  function handleDescendingClick() {
    let newData = [...sortedCountries];
    newData.map((el) => el.scores.sort((a, b) => b.s - a.s));
    return setAscending(newData);
  }

  const [descending, setDescending] = useState([...sortedCountries]);
  function handleAscendingClick() {
    let newData = [...sortedCountries];
    newData.map((el) => el.scores.sort((a, b) => a.s - b.s));
    return setDescending(newData);
  }

  //sort the world wide table
  let newArray = [];
  props.data.map((element) => element.scores.map((el) => newArray.push(el)));
  newArray.sort((a, b) => b.s - a.s);
  console.log(newArray);
  //till this point

  function country(data) {
    return data.map((element) => (
      <table className="divTable">
        <thead className="tableHead">
          <td>High Scores:</td>
          <td> {element.name.toUpperCase()}</td>
        </thead>
        <tbody className="tableBody">
          {element.scores.map((e) => (
            <tr>
              <td>{e.n.charAt(0).toUpperCase() + e.n.slice(1)}</td>
              <td>{e.s}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ));
  }

  function worldWideScores(data) {
    return (
      <table className="divTable">
        {data.map((e) => (
          <tbody className="tableBody">
            <tr>
              <td>{e.n.charAt(0).toUpperCase() + e.n.slice(1)}</td>
              <td>{e.s}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }

  return (
    <div className="container">
      <div className="buttonsContainer">
        <button onClick={handleDescendingClick}>Descending Order</button>
        <button onClick={handleAscendingClick}>Ascending Order</button>
      </div>
      <div className="tables">
        <table className="tableStyle">
          {/* {worldWideScores(sortedCountries)} */}
          {ascending
            ? country([...ascending])
            : descending
            ? country([...descending])
            : country([...sortedCountries])}
        </table>
        <table className="tableStyle">{worldWideScores(newArray)}</table>
      </div>
    </div>
  );
}
