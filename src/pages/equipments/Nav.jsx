import React from "react";

export default function Nav({ active = "equipment" }) {
  // depth1, depth2 데이터로 분리하여 중복 제거
  const depth1 = [
    { key: "about", href: "../about/intro.html", label: "About" },
    { key: "business", href: "../business/business_1.html", label: "Business" },
    { key: "equipment", href: "../equipment/equipment.html", label: "Equipment" },
    { key: "news", href: "../news/news.html", label: "News" },
    { key: "recruit", href: "../recruit/talent_recruitment.html", label: "Recruit" },
  ];

  const depth2 = [
    // ... 필요 시 보유장비 항목 추가 ...
  ];

  return (
    <div className="container d-flex align-items-center px-0 px-sm-5">
      <a href="../main/main.html" className="sub-nav__home" aria-label="home">
        <img src="../assets/images/sub/sub-nav__icon.png" alt="home icon" />
      </a>

      <div className="sub-nav__item">
        <button className="sub-nav__button" type="button" aria-expanded="false">
          Equipment
        </button>

        <div className="sub-nav__drawer" style={{ overflow: "hidden", display: "none" }}>
          <ul className="sub-nav-clone--depth1">
            {depth1.map((item) => (
              <li className="item" key={item.key}>
                <a
                  href={item.href}
                  className={`link${item.key === active ? " on" : ""}`}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sub-nav__item">
        <button className="sub-nav__button on" type="button" aria-expanded="true">
          보유장비
        </button>

        <div className="sub-nav__drawer" style={{ overflow: "hidden", display: "block" }}>
          <ul className="sub-nav-clone--depth2">
            {depth2.length === 0 ? (
              // ...existing code...
              null
            ) : (
              depth2.map((it) => (
                <li className="item" key={it.key}>
                  <a
                    href={it.href}
                    className={`link${it.key === active ? " on" : ""}`}
                  >
                    <span>{it.label}</span>
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}