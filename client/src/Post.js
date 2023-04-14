import React from "react";

const post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://s.yimg.com/ny/api/res/1.2/4fzVesFNC7DcsQ8zeEE2Jg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/ap_finance_articles_694/567b0edf63e1359beed78ab43157fece"
          alt="Blog-img"
        ></img>
      </div>
      <div className="texts">
        <h2>U.S. Adds A Healthy 236,000 Jobs Despite Fed's Rate Hikes</h2>
        <p className="info">
          <a href="#" className="author">
            Nikhil Patil
          </a>
          <time>2023-03-31 12:30</time>
        </p>
        <p className="summary">
          America's employers added a solid 236,000 jobs in March, suggesting
          that the economy remains on solid footing despite the nine interest
          rate hikes the Federal Reserve has imposed over the past year in its
          drive to tame inflation.
        </p>
      </div>
    </div>
  );
};

export default post;
