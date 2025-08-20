// Import de iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// Estilo del componente
import "./startBtn.css"; //Import del css

function startBtn() {
  return (
    <>
      <div className="button">
        <div className="startTitle">
          <h3>Start now</h3>
        </div>
        <div className="btnIcon">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      </div>
    </>
  );
}

export default startBtn;
