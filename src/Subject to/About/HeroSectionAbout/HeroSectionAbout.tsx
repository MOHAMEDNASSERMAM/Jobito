import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./HeroSectionAbout.module.css";
import { useEffect, useRef, useState } from "react";

export const HeroSectionAbout = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({ ...prev, [key]: entry.isIntersecting }));
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" },
      );

      if (sectionRefs.current[key]) {
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);
  return (
    <section
      className={styles.heroSection} ref={(el) => (sectionRefs.current.hero = el)}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>

      <div className={`${styles.container} ${isVisible.hero ? styles.visible : ""}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>Welcome to Excellence</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.servicesWord}>Services</span>
            <span className={styles.titleLine}>
              <span className={styles.purpleText}>WE</span>
              <span className={styles.blueText}>
                Offer
                <svg className={styles.underline} viewBox="0 0 300 20">
                  <path
                    d="M5 15 Q 40 5, 80 15 T 160 15 T 240 15 T 300 15"
                    stroke="#26A4FF"
                    fill="transparent"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className={styles.description}>
            Freedom HR provides custom HR solutions for your business in the
            most flexible and value driven way.
          </p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>
              Get Started
              <ArrowRight size={18} />
            </button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
