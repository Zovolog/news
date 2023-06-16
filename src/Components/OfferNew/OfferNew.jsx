import { useState } from "react";
import { Link } from "react-router-dom";
import "./OfferNew.css";
export const OfferNew = () => {
  const [name, getName] = useState("");
  const [email, getEmail] = useState("");
  const [news, getNews] = useState("");
  return (
    <div>
      <header>
        <img src="/img/logo.png" height="90%" style={{ marginLeft: "25px" }} />
        <div className="link-row">
          <p className="link">
            <a href="/">Новинки</a>
          </p>
          <p className="link">
            <Link to="/releases">Релізи</Link>
          </p>
          <p className="link">
            <a href="/updates">Новини із ігрової сфери</a>
          </p>
          <p className="link">
            <a href="/offer-new">Запропонувати новину</a>
          </p>
        </div>
      </header>
      <main>
        <div className="offer-wrapper">
          <input
            type="text"
            placeholder="Type your name.."
            onChange={(e) => getName(e.currentTarget.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Type your email.."
            onChange={(e) => getEmail(e.currentTarget.value)}
            value={email}
          />

          <textarea
            type="text"
            placeholder="Type your text.."
            onChange={(e) => getNews(e.currentTarget.value)}
            value={news}
          ></textarea>
          <button
            className="send"
            onClick={() => {
              getName("");
              getEmail("");
              getNews("");
            }}
          >
            Send news
          </button>
        </div>
      </main>
    </div>
  );
};
