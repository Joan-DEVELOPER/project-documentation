// Estilo del componente
import "./plan.css"; //Import del css

function Card() {
  return (
    <>
      <div className="cards">
        <div className="planCard">
          <div className="cardHead">
            <p>Starter</p>
            <p>Track your expenses and set simple budgets</p>
          </div>
          <div className="price">
            <h4>Free</h4>
          </div>

          <div className="cardBtn">
            <button disabled="disabled">Current Plan</button>
          </div>

          <div className="cardContent">
            <p>
              <strong>What you will get</strong>
            </p>
            <p>Basic expense and budget control</p>
            <p>Clear overview of income and spending</p>
            <p>Perfect for beginners looking to organize their money</p>
            <p>Payment reminders and alerts</p>
          </div>
        </div>
        <br />

        <div className="planCard">
          <div className="cardHead">
            <p>Plus</p>
            <p>Automate savings and manage basic investments</p>
          </div>

          <div className="price">
            <h4>$10</h4>
            <p>/month</p>
          </div>

          <div className="cardBtn">
            <button>Get Started</button>
          </div>

          <div className="cardContent">
            <p>
              <strong>What you will get</strong>
            </p>
            <p>Everything in Starter</p>
            <p>Automated savings setup</p>
            <p>Basic investment management</p>
            <p>Payment reminders and alerts</p>
          </div>
        </div>

        <div className="planCard">
          <div className="cardHead">
            <p>Pro</p>
            <p>Access all features with advanced financial insights</p>
          </div>

          <div className="price">
            <h4>$20</h4>
            <p>/month</p>
          </div>

          <div className="cardBtn">
            <button>Get Started</button>
          </div>

          <div className="cardContent">
            <p>
              <strong>What you will get</strong>
            </p>
            <p>Everything in Plus</p>
            <p>Advanced financial analysis and detailed reports</p>
            <p>Full customization of goals and budgets</p>
            <p>Access to all premium features and priority support</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Card;
