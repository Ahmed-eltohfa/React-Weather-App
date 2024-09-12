import './App.css';
import Main from './components/Main';
import { useSelector } from 'react-redux';

function App() {

  const weather = useSelector(state => state.weather);
  const condition = weather["current"]["condition"]["text"] ? weather["current"]["condition"]["text"] : "cloud";

  return (
    <div className={`App flex justify-center items-center h-screen ${condition.includes("snow") ? "bg-snowy-back" : condition.includes("rain") ? "bg-rainy-back" : condition.includes("clear") ? "bg-sunny-back" : "bg-cloudy-back"}`}>
      <Main />
    </div>
  );
}

export default App;
