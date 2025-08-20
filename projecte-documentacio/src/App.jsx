import NavBtn from "./components/navbar/navbar_button/nav_btn.jsx";
import StartBtn from "./components/actions/cta_btn/startBtn.jsx";
import Features from "./components/feature_card.jsx";
import Card from "./components/plans/plan_card.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainApp">
        <img src="/MoneyMate icon.png" alt="app icon" />
        <div className="navbar">
          <NavBtn />
        </div>
      </div>

      <div className="appContent">
        <h1>Take control of your money 💰</h1>
        <h3>Track your savings, investments, and goals in one simple app.</h3>
        <StartBtn />
      </div>
      <br />

      <div className="features">
        <h1>All you need to track your money</h1>

        <div className="featureList">
          <Features actionTitle="Control de gastos y presupuestos"></Features>
          <Features actionTitle="Ahorro automático"></Features>
          <Features actionTitle="Inversiones inteligentes"></Features>
          <Features actionTitle="Recordatorios de pagos y alertas"></Features>
        </div>
      </div>

      <div className="plans">
        <h1>Our plans</h1>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
