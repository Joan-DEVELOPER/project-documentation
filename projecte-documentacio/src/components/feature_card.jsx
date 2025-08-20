import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faPiggyBank,
  faChartLine,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "./feature_card.css";

function Features({ actionTitle }) {
  // Mapa de títulos a iconos
  const iconsMap = {
    "Control de gastos y presupuestos": faWallet,
    "Ahorro automático": faPiggyBank,
    "Inversiones inteligentes": faChartLine,
    "Recordatorios de pagos y alertas": faBell,
  };

  const subtitleMap = {
    "Control de gastos y presupuestos":
      "Tendrás el control total de tus gastos y te generaremos un presupuesto según tus necesidades.",
    "Ahorro automático":
      "Configura reglas de ahorro y deja que la app guarde automáticamente una parte de tus ingresos.",
    "Inversiones inteligentes":
      "Invierte de manera sencilla con recomendaciones basadas en tu perfil financiero.",
    "Recordatorios de pagos y alertas":
      "Nunca olvides una fecha de pago con alertas y recordatorios automáticos.",
  };

  const icon = iconsMap[actionTitle]; // selecciona el icono correspondiente
  const description = subtitleMap[actionTitle]; // selecciona la descripción correspondiente

  return (
    <div className="flashcard">
      <div className="title">
        <h2>{actionTitle}</h2>
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Features;
