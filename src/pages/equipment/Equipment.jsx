import React, { useState } from "react";
import './equipment.css'

// 모든 equipment 이미지를 자동 import
const equipmentImages = import.meta.glob(
  "../../assets/images/equipments/*",
  {
    eager: true,
    import: "default",
  }
);

// 이미지 경로 매핑 함수
const getEquipmentImage = (filename) => {
  const imagePath = `../../assets/images/equipments/${filename}`;
  return equipmentImages[imagePath] || null;
};

export const EQUIPMENTS = [
  {
    id: 1,
    category: "지상측량·정밀수준",
    type: "VRS측량 / 스태틱측량 / RTK측량",
    name: "GNSS수신기",
    image: "gnss.png",
  },
  {
    id: 2,
    category: "지상측량·정밀수준",
    type: "2급 레벨측량",
    name: "자동레벨(SPRINTER250)",
    image: "sprinter250.png",
  },
  {
    id: 3,
    category: "지상측량·정밀수준",
    type: "1급측량장비",
    name: "토탈스테이션(T32R)",
    image: "t32r.png",
  },
  {
    id: 4,
    category: "지상측량·정밀수준",
    type: "1급 정리레벨",
    name: "DiNi",
    image: "dini.png",
  },
  {
    id: 5,
    category: "지상측량·정밀수준",
    type: "1급 데오톨라이트",
    name: "ET-02F",
    image: "et-02f.png",
  },

  // ---------- 항공측량·원격탐사 ----------
  {
    id: 6,
    category: "항공측량·원격탐사",
    type: "항공측량 / 항공동영상 (RMS 5cm 정확도)",
    name: "PHANTOM 4 RTK 및 MAVIC3",
    image: "mavic3.png",
  },
  {
    id: 7,
    category: "항공측량·원격탐사",
    type: "항공사진측량 / 항공동영상 (RMS 2cm 정확도) / 항공LiDAR취득",
    name: "M350S",
    image: "m350s.png",
  },
  {
    id: 8,
    category: "항공측량·원격탐사",
    type: "항공사진도화 / 항공사진판독",
    name: "수치도화기",
    image: "dohwa.png",
  },

  // ---------- 지하매설물·관로탐사 ----------
  {
    id: 9,
    category: "지하매설물·관로탐사",
    type: "금속관로탐사",
    name: "MPS-11S",
    image: "mps-11s.png",
  },
  {
    id: 10,
    category: "지하매설물·관로탐사",
    type: "맨홀탐지기",
    name: "MD-3010",
    image: "md-3010.png",
  },
  {
    id: 11,
    category: "지하매설물·관로탐사",
    type: "지중탐사기",
    name: "SBP-1 Sub Botto Profile_",
    image: "sbp-1.png",
  },

  // ---------- 수로·해양측량 ----------
  {
    id: 12,
    category: "수로·해양측량",
    type: "무인수심측량선",
    name: "아파치3호",
    image: "apache.png",
  },
  {
    id: 13,
    category: "수로·해양측량",
    type: "음향측식기",
    name: "AquaRuler200",
    image: "apuaruler200.png",
  },
  {
    id: 14,
    category: "수로·해양측량",
    type: "검조의",
    name: "조위계",
    image: "zowige.png",
  },

  // ---------- 출력·기타 ----------
  {
    id: 15,
    category: "출력·기타",
    type: "플로터",
    name: "HP Designjet T1600",
    image: "t1600.png",
  },
];

export const EQUIPMENT_CATEGORIES = [
  "전체",
  "지상측량·정밀수준",
  "항공측량·원격탐사",
  "지하매설물·관로탐사",
  "수로·해양측량",
  "출력·기타",
];

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredEquipments =
    activeCategory === "전체"
      ? EQUIPMENTS
      : EQUIPMENTS.filter((item) => item.category === activeCategory);

  return (
    <div className="equipment-page">
      {/* 타이틀 */}
      <section className="equipment-header container">
        <h2 className="equipment-title">보유장비</h2>
        <div className="equipment-title-line" />
        <p className="equipment-subtitle">
          서원공간정보가 보유한 주요 장비 목록입니다
        </p>
      </section>

      {/* 카테고리 */}
      <section className="equipment-filter container">
        <ul className="equipment-filter__list">
          {EQUIPMENT_CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                className={
                  "equipment-filter__button" +
                  (activeCategory === cat ? " on" : "")
                }
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* 리스트 전체 */}
      <section className="equipment-list container">
        {filteredEquipments.map((eq) => (
          <div key={eq.id} className="equipment-row">
            <div className="equipment-image">
              <img src={getEquipmentImage(eq.image)} alt={eq.name} />
            </div>

            <div className="equipment-info">
              <div className="equipment-category">{eq.category}</div>
              <div className="equipment-name">{eq.name}</div>
              <div className="equipment-type">{eq.type}</div>
            </div>
          </div>
        ))}

        {filteredEquipments.length === 0 && (
          <p className="text-center py-5">해당 카테고리의 장비가 없습니다.</p>
        )}
      </section>
    </div>
  );
}
