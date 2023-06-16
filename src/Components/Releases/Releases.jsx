import "./Releases.css";
import { Link } from "react-router-dom";
export const Releases = () => {
  const posts = [
    {
      img: "assassins-creed-mirage.jpg",
      text: "Assassin's Creed Mirage — це майбутня пригодницька гра, розроблена Ubisoft Bordeaux і видана Ubisoft. Це буде тринадцята велика частина серії Assassin's Creed і наступник Assassin's Creed Valhalla 2020 року.",
      data: "Жовтень , 2023",
    },
    {
      img: "avatar.jpg",
      text: "Avatar: Frontiers of Pandora — це майбутня пригодницька гра з відкритим світом, заснована на серії фільмів «Аватар». Гра розробляється Massive Entertainment і буде опублікована Ubisoft для PlayStation 5, Windows, Xbox Series X/S і Amazon Luna 7 грудня 2023 року.",
      data: "Листопад, 2023",
    },
    {
      img: "stalker2.jpg",
      text: "S.T.A.L.K.E.R. 2: Heart of Chornobyl — це майбутній шутер від першої особи у жанрі survival horror, розроблений і виданий українським розробником ігор GSC Game World. Запланований на випуск для Microsoft Windows і Xbox Series X/S, це буде четверта гра, випущена в S.T.A.L.K.E.R.",
      data: "2023 рік",
    },
    {
      img: "robocop.jpg",
      text: "RoboCop: Rogue City — це майбутня гра-шутер, яка запланована на вересень 2023 року, розроблена та видана Teyon і Nacon. Він заснований на оригінальній трилогії фільмів як абсолютно нова пригода про майбутнє правоохоронних органів.",
      data: "вересень, 2023 рік",
    },
    {
      img: "forza.jpg",
      text: "Forza — це серія ігор-симуляторів гонок для консолей Xbox і Microsoft Windows, опублікованих Xbox Game Studios. Серія намагається імітувати продуктивність і керованість багатьох реальних серійних, модифікованих і гоночних автомобілів.",
      data: "2023 рік",
    },
  ];
  return (
    <div>
      <header>
        <img src="/img/logo.png" height="90%" style={{ marginLeft: "25px" }} />
        <div className="link-row">
          <p className="link">
            <Link to="/">Новинки</Link>
          </p>
          <p className="link">
            <Link to="/releases">Релізи</Link>
          </p>
          <p className="link">
            <Link to="/updates">Новини із ігрової сфери</Link>
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
                src={`/imgReleases/${post.img}`}
                width="90%"
                className="img-post"
              />
              <p className="post-text">
                {" "}
                <span style={{ fontWeight: "700" }}>Опис: </span> {post.text}
              </p>
              <p style={{ marginTop: "15px" }} className="post-date">
                <span style={{ fontWeight: "700" }}>
                  Дата приблизного релізу:
                </span>{" "}
                {post.data}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
