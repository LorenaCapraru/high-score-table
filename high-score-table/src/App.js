import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";

function App() {
  return <HighScoreTable data={allCountryScores} />;
}

export default App;
