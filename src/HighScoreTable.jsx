import React from "react";

export default function HighScoreTable(props) {
  const country = props.data.map((element) => (
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

  return <table className="tableStyle">{country}</table>;
}
