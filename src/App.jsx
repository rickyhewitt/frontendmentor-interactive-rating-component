import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleClick = (rating) => {
    setRating(rating);
  };

  const submitRating = (e) => {
    /* rating: [integer] */
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <>
      <div className={success ? "card hidden" : "card"}>
        <div className="star">
          <img src="./images/icon-star.svg" alt="Star" />
        </div>

        <h2>How did we do?</h2>

        <span className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </span>

        <form>
          <span
            className={rating === 1 ? "rating active" : "rating"}
            onClick={() => handleClick(1)}
          >
            1
          </span>
          <span
            className={rating === 2 ? "rating active" : "rating"}
            onClick={() => handleClick(2)}
          >
            2
          </span>
          <span
            className={rating === 3 ? "rating active" : "rating"}
            onClick={() => handleClick(3)}
          >
            3
          </span>
          <span
            className={rating === 4 ? "rating active" : "rating"}
            onClick={() => handleClick(4)}
          >
            4
          </span>
          <span
            className={rating === 5 ? "rating active" : "rating"}
            onClick={() => handleClick(5)}
          >
            5
          </span>
          <input
            type="submit"
            value="Submit"
            onClick={(e) => submitRating(e)}
          ></input>
        </form>
      </div>

      <div
        className={
          success ? "card rating-complete" : "card rating-complete hidden"
        }
      >
        <div className="image">
          <img src="./images/illustration-thank-you.svg" alt="Thank you" />
        </div>

        <div className="body">
          {" "}
          <div className="complete-rating">You selected {rating} out of 5</div>
          <h2>Thank you!</h2>
          <span>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
