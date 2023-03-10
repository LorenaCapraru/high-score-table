import React from "react";

export default function HighScoreTable(props) {
  const sortedCountries = props.data.sort((a, b) => {
    let sortedA = a.name;
    let sortedB = b.name;
    if (sortedA > sortedB) return 1;
    else if (sortedB > sortedA) return -1;
    else return 0;
  });

  const country = sortedCountries.map((element) => (
    <table className="divTable">
      <thead className="tableHead">
        <td>High Scores:</td>
        <td> {element.name.toUpperCase()}</td>
      </thead>
      <tbody className="tableBody">
        {element.scores
          .sort((a, b) => b.s - a.s)
          .map((e) => (
            <tr>
              <td>{e.n.charAt(0).toUpperCase() + e.n.slice(1)}</td>
              <td>{e.s}</td>
            </tr>
          ))}
      </tbody>
    </table>
  ));

  return <table className="tableStyle">{country}</table>;
}
