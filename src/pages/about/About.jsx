import { Routes, Route } from "react-router-dom";
import History from "./history";
// import Intro from "./intro";   // intro 페이지 따로 만들면
// import CI from "./ci";         // CI 페이지 따로 만들면

export default function About() {
  return (
    <Routes>
      {/* intro 페이지가 있으면 라우팅 추가 */}
      {/* <Route path="intro" element={<Intro />} /> */}

      <Route path="history" element={<History />} />

      {/* 404 fallback */}
      <Route path="*" element={<History />} />
    </Routes>
  );
}
