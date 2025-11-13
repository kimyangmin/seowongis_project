export default function Footer() {
  return (
    <footer id="footer" className="footer">
      {/* footer 전체를 감싸는 full-width 영역 */}
      <div className="footer-inner">

        {/* 로고 */}
        <div className="footer-logo">
          <img src="/assets/images/main/footer_logo.png" alt="footer logo" />
        </div>

        {/* 정책 링크 */}
        <ul className="footer-policy">
          <li><a href="/policy/privacy">개인정보취급방침</a></li>
          <li><a href="/policy/term">이용약관</a></li>
        </ul>

        {/* 정보 */}
        <div className="footer-text">
          <p>㈜지오스토리 | 대표: 김승용</p>
          <p>사업자등록번호: 109-86-36323</p>
          <p>주소: 서울특별시 강서구 화곡로68길 82, 406-408호</p>
          <p>
            Tel: <a href="tel:18007453">1800-7453</a> | Fax: 070-5228-4731
          </p>
          <p>COPYRIGHT © 2021 GEOSTORY. All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}
