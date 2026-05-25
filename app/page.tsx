"use client";

import { useEffect, useRef, useState } from "react";
import "./affetto.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [playing, setPlaying] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroScale = 1 + scrollY * 0.0002;

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const features = [
    {
      tag: "TAROT",
      title: "오늘의 연애\n타로 리딩",
      desc: "78장의 카드가 당신의 감정과 관계를\n섬세하게 해석합니다",
      color: "#1A1714",
      bg: "#FBF6F0",
      num: "01",
    },
    {
      tag: "BEHAVIOR REPORT",
      title: "연애 행동유형\n리포트",
      desc: "데이터 기반 분석으로\n당신만의 연애 패턴을 발견하세요",
      color: "#1A1714",
      bg: "#F6F0FB",
      num: "02",
    },
    {
      tag: "COMPATIBILITY",
      title: "상대방과의\n궁합 해석",
      desc: "두 사람의 에너지가 만나는 지점,\nAI가 깊이 있게 풀어드립니다",
      color: "#1A1714",
      bg: "#F0F6FB",
      num: "03",
    },
  ];

  const stats = [
    { num: "94%", label: "공감도" },
    { num: "12만+", label: "누적 리딩" },
    { num: "4.9", label: "평균 별점" },
    { num: "3분", label: "평균 소요시간" },
  ];

  return (
    <div style={{ background: "#FAF8F5", color: "#1A1714", overflowX: "hidden" }}>
<audio ref={audioRef} loop preload="auto">
     <source src="/music.mp3" type="audio/mpeg" />
   </audio>
      <div className="grain-overlay" />

      <div className="nav-dots">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`nav-dot ${activeSection === i ? "active" : ""}`} />
        ))}
      </div>

      <header>
        <div className="logo">AFFETTO</div>
        <button onClick={toggleMusic} className="music-btn">
          {playing ? "♪ ON" : "♪ OFF"}
        </button>
        <nav>
          <a href="#">연애 리딩</a>
          <a href="#">행동유형</a>
          <a href="#">궁합분석</a>
          <a href="#">커뮤니티</a>
          <a href="#" className="nav-cta">
            멤버십 시작
          </a>
        </nav>
      </header>

      <section className="hero" ref={heroRef} onMouseEnter={() => setActiveSection(0)}>
        <div className="hero-bg" />
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />

        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03, pointerEvents: "none" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60%" cy="35%" r="300" fill="none" stroke="#1A1714" strokeWidth="1" />
          <circle cx="60%" cy="35%" r="500" fill="none" stroke="#1A1714" strokeWidth="0.5" />
        </svg>

        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 10,
            opacity: heroOpacity,
            transform: `scale(${heroScale})`,
            transformOrigin: "center center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            지금 베타 멤버 모집 중
          </div>
          <div className="hero-eyebrow">RELATIONSHIP INTELLIGENCE</div>
          <h1 className="hero-title">
            연애도
            <br />
            <em>전략</em>이 필요해
          </h1>
          <p className="hero-subtitle">
            타로 · 심리 · 데이터로 분석하는
            <br />
            나만의 연애 리포트
          </p>
          <div className="hero-actions">
            <button className="hero-btn-primary">7일 무료 체험 →</button>
            <button className="hero-btn-secondary">어떻게 다른가요?</button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          SCROLL
        </div>
      </section>

      <div className="stats-band" onMouseEnter={() => setActiveSection(0)}>
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="section-intro" onMouseEnter={() => setActiveSection(1)}>
        <div>
          <div className="section-label">CORE FEATURES</div>
          <h2 className="section-heading">
            관계를 읽는
            <br />
            세 가지 <em>시선</em>
          </h2>
        </div>
        <p className="section-body">
          감정은 복잡하고 관계는 깊습니다.
          <br />
          AFFETTO는 타로의 직관, 심리학의 논리,
          <br />
          데이터의 패턴으로 당신의 연애를 함께 바라봅니다.
        </p>
      </div>

      <div className="features-grid" onMouseEnter={() => setActiveSection(1)}>
        {features.map((f, i) => (
          <div key={i} className="feature-card" style={{ background: f.bg, color: f.color }}>
            <div className="card-num">{f.num}</div>
            <div>
              <div className="card-tag">{f.tag}</div>
              <div className="card-title">{f.title}</div>
              <div className="card-desc">{f.desc}</div>
            </div>
            <div className="card-arrow">
              <span className="card-arrow-line" />
              자세히 보기
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      <div className="testimonial-section" onMouseEnter={() => setActiveSection(2)}>
        <div className="testimonial-side-label">USER VOICE</div>
        <div className="testimonials">
          <div className="testimonial-item">
            <div className="testimonial-quote">"타로 리딩 결과가 너무 정확해서 소름이 돋았어요. 지금 제 상황을 그대로 말해주는 것 같았어요."</div>
            <div className="testimonial-meta">27세, 직장인 · 서울</div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote">"연애 행동유형 리포트 보고 왜 항상 같은 패턴으로 실패했는지 처음으로 이해했어요."</div>
            <div className="testimonial-meta">31세, 디자이너 · 부산</div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote">"궁합 분석이 단순한 궁합이 아니라 실제 관계에서 어떻게 충돌하고 맞춰가는지까지 알려줘서 좋았어요."</div>
            <div className="testimonial-meta">29세, 개발자 · 인천</div>
          </div>
        </div>
      </div>

      <div className="cta-section" onMouseEnter={() => setActiveSection(2)}>
        <div className="cta-bg-circle" />
        <div className="cta-eyebrow">BEGIN YOUR READING</div>
        <h2 className="cta-heading">
          오늘, 당신의
          <br />
          연애를 <em>읽어드립니다</em>
        </h2>
        <p className="cta-sub">
          타로 · 행동유형 · 궁합 분석
          <br />
          프리미엄 리포트를 경험하세요
        </p>
        <p className="cta-pricing">
          월 <strong>9,900원</strong>부터 · 언제든 해지 가능
        </p>
        <button className="cta-btn">멤버십 시작하기</button>
      </div>

      <footer>
        <div className="footer-logo">AFFETTO</div>
        <div className="footer-note">© 2025 Affetto · 당신의 연애를 위한 인사이트</div>
      </footer>
    </div>
  );
}