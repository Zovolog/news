import { Link } from "react-router-dom";
import "./Previews.css";

export const Previews = () => {
  const posts = [
    {
      img: "atomic.jpg",
      text: "Atomic Heart — це одиночний шутер від першої особи, розроблений Mundfish і виданий Focus Entertainment і 4Divinity. Гра була випущена для PlayStation 4, PlayStation 5, Windows, Xbox One і Xbox Series X/S 21 лютого 2023 року. Після випуску гра отримала загалом позитивні відгуки.",
      data: "Лютий 21, 2023",
    },
    {
      img: "dead-island.webp",
      text: "Dead Island 2 — це рольова гра-екшн 2023 року, розроблена Dambuster Studios і видана Deep Silver. Це продовження відеогри Dead Island 2011 року та третя основна частина серії Dead Island.",
      data: "Квітень 21, 2023",
    },
    {
      img: "hogwarts.jpg",
      text: "Hogwarts Legacy — це рольова гра-екшн 2023 року, розроблена Avalanche Software і опублікована Warner Bros. Games під брендом Portkey Games. Дія гри, частини франшизи Wizarding World, розгортається наприкінці 1800-х років, за століття до подій, описаних у романах про Гаррі Поттера.",
      data: "Лютий 7, 2023",
    },
    {
      img: "horizon.jpg",
      text: "Horizon Call of the Mountain — це пригодницька відеогра, розроблена Guerrilla Games і Firesprite та опублікована Sony Interactive Entertainment для PlayStation 5. Гра, яка є частиною серії Horizon, була випущена 22 лютого 2023 року як стартова назва для Гарнітура віртуальної реальності PlayStation VR2.",
      data: "Лютий 22, 2023",
    },
    {
      img: "resident.jpg",
      text: "Resident Evil 4 — гра у жанрі survival horror 2023 року, розроблена та опублікована Capcom. Це ремейк гри Resident Evil 4 2005 року. Гравці керують американським агентом Леоном С. Кеннеді, який повинен врятувати Ешлі Грем, доньку президента Сполучених Штатів, від таємничого культу Los Illuminados.",
      data: "Березень 23, 2023",
    },
  ];
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
        <div className="releases-wrapper">
          {posts.map((post, i) => (
            <div key={i} className="post">
              <img
                src={`/imgNewGames/${post.img}`}
                width="90%"
                className="img-post"
              />
              <p className="post-text">
                {" "}
                <span style={{ fontWeight: "700" }}>Опис: </span> {post.text}
              </p>
              <p style={{ marginTop: "15px" }} className="post-date">
                <span style={{ fontWeight: "700" }}>Дата релізу:</span>{" "}
                {post.data}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
