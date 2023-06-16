import { Link } from "react-router-dom";
export const Updates = () => {
  const posts = [
    {
      img: "cs2.jpg",
      text: "Інсайди підтвердилися і Valve анонсували Counter-Strike 2 - масштабне  оновлення для Global Offensive на базі рушія Source 2. Окрім самого анонсу розробники поділилися й першою інформацією про майбутню гру.Для того, щоби описати основні відмінності Counter-Strike 2 від попередниці, Valve випустили три ролики, у яких коротко розказано про кожну з особливостей нової гри.",
    },
    {
      img: "sand.png",
      text: "Дія багатокористувацької гри відбувається в альтернативній реальності, де у 1910 році Австро-Угорська імперія здійснила технологічний прорив та відкрила подорожі на інші планети. Імперія швидко поширила свою експансію на інші планети. Проте на планеті Софі все пішло не за планом. Там відбулася екологічна катастрофа, яка змусила багатьох відмовитись від колонізації планети, багатої на ресурси.",
    },
    {
      img: "cyberpunk.jpg",
      text: "У Cyberpunk 2077 та доповненні Phantom Liberty з'явиться українська мова.",
    },
    {
      img: "ea.jpg",
      text: "В магазині Electronic Arts нарешті додали гривню, але купляти ігри EA ви захочете в Steam.",
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
                src={`/imgNews/${post.img}`}
                width="90%"
                className="img-post"
              />
              <p className="post-text">
                {" "}
                <span style={{ fontWeight: "700" }}>Опис: </span> {post.text}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
