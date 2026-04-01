import './App.css';
import Main from './components/Main';
import { useSelector } from 'react-redux';

function App() {
  const weather = useSelector(state => state.weather.data);
  const condition = weather["current"]?.condition?.text ? weather["current"]["condition"]["text"] : "cloud";

  const getBackgroundClass = () => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes("snow")) return "from-snowy-back to-blue-200";
    if (lowerCondition.includes("rain")) return "from-rainy-back to-slate-800";
    if (lowerCondition.includes("clear") || lowerCondition.includes("sunny")) return "from-sunny-back to-orange-400";
    return "from-cloudy-back to-blue-400";
  };

  return (
    <div className={`App flex justify-center items-center min-h-screen px-3 sm:px-4 bg-gradient-to-br ${getBackgroundClass()} transition-colors duration-500`}>
      <Main />
    </div>
  );
}

export default App;
