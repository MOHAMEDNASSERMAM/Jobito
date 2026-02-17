import styles from "./About.module.css";
import image2 from "../../assets/Img/Gemini_Generated_Image_lk4biqlk4biqlk4b.png";
import {ArrowRight, Shield, BarChart3, Rocket, Sparkles, Users, Building2, Briefcase, Target, HeadphonesIcon, TrendingUp, Star, CheckCircle, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => ({ ...prev, [key]: entry.isIntersecting }));
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
      );
      
      if (sectionRefs.current[key]) {
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const features = [
    {
      title: "Elegant and Modern Design",
      description:
        "The designs we make are designs that are trending. Our team makes sure your website always looks good.",
      icon: <Sparkles className={styles.featureIcon} />,
      color: "#FF6B6B",
    },
    {
      title: "Data is always Safe",
      description:
        "We finally found a host that truly understood the unique secure lens need to know basis found a host that truly know.",
      icon: <Shield className={styles.featureIcon} />,
      color: "#4ECDC4",
    },
    {
      title: "High-End Analyzing",
      description:
        "Share processes and data secure lens need to know basis. Our team assured your website is always safe and secure.",
      icon: <BarChart3 className={styles.featureIcon} />,
      color: "#A78BFA",
      highlighted: true,
    },
    {
      title: "Our Dedicated Support",
      description:
        "We finally found a host that truly understood the unique secure lens need to know basis found a host that truly know.",
      icon: <Rocket className={styles.featureIcon} />,
      color: "#FFA26B",
    },
  ];

  const services = [
    {
      title: "Workplace Efficiency",
      description:
        "We provide workplace coaching across all levels of the business, helping individuals reach their potential and achieve workplace success.",
      icon: <Users className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Organisational and Structural Redesign",
      description:
        "We support businesses with reshaping and realigning their business model and structure to adapt to the rapidly changing world we live in.",
      icon: <Building2 className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Career Enhancement Services",
      description:
        "Career transitioning can be a daunting experience. We can help you gain confidence and find your potential, landing you the job you desire.",
      icon: <Briefcase className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Talent Acquisition & Onboarding",
      description:
        "Our team of specialists are dedicated to finding you professionals with the right skills and attitude that will help take your business to the next level.",
      icon: <Target className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "General HR Support",
      description:
        "We provide a range of generalist HR and people administration support. Whether it's over the phone, via email or in person, we've got the knowledge.",
      icon: <HeadphonesIcon className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      title: "Managing Performance",
      description:
        "When your organisation gets performance management right, your people will work together cohesively to reach your companies objectives.",
      icon: <TrendingUp className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    },
    {
      title: "Strategic Planning",
      description:
        "We help you develop and implement strategic HR initiatives that align with your business goals and drive sustainable growth.",
      icon: <Zap className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
    {
      title: "Employee Engagement",
      description:
        "Create a thriving workplace culture with our employee engagement programs designed to boost productivity and retention.",
      icon: <Star className={styles.serviceIcon} />,
      gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
    },
  ];

  return (
    <section className={styles.aboutPage}>
      <section className={styles.heroSection} ref={el => sectionRefs.current.hero = el}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.floatingShapes}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
          </div>
        </div>
        
        <div className={`${styles.container} ${isVisible.hero ? styles.visible : ''}`}>
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
              <button className={styles.secondaryButton}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Card Animations */}
      <section 
        className={styles.servicesSection} 
        ref={el => sectionRefs.current.services = el}
      >
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${isVisible.services ? styles.visible : ''}`}>
            <h2>
              Services <span>We Offer</span>
            </h2>
            <p>
              Freedom HR provides custom HR solutions for your business in the
              most flexible and value driven way.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.serviceCard} ${isVisible.services ? styles.visible : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.serviceCardInner}>
                  <div className={styles.serviceFront}>
                    <div className={styles.serviceIconWrapper} style={{ background: service.gradient }}>
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description.substring(0, 80)}...</p>
                    <span className={styles.serviceHoverHint}>
                      Hover to learn more
                    </span>
                  </div>
                  
                  <div className={styles.serviceBack} style={{ background: service.gradient }}>
                    <div className={styles.serviceBackContent}>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <button className={styles.serviceBackButton}>
                        Read More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.helpoutercontainer}>
        <div className={styles.helpbluebanner}>
          <div className={styles.helpcontentwrapper}>
            <div className={styles.helptextside}>
              <h2>
                We're Here <span>To Help</span>
              </h2>
              <p>
                At Freedom HR we become an invaluable resource within your
                business, teaming up as your HR expert and freeing you to
                concentrate on other areas of your business. We offer a scalable
                and cost-effective solution and become your friend and trusted
                advisor.
              </p>
              <div className={styles.authorinfo}>
                <strong>Farah Mody</strong> - Director
              </div>
            </div>

            <div className={styles.helpimageside}>
              <div className={styles.blobshape}>
                <img src={image2} alt="Director" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Animated Features */}
      <section 
        className={styles.whyUsSection} 
        ref={el => sectionRefs.current.whyUs = el}
      >
        <div className={styles.container}>
          <div className={styles.headerTop}>
            <span className={styles.subtitle}>Best software</span>
            <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((item, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${item.highlighted ? styles.highlighted : ''} ${isVisible.whyUs ? styles.visible : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.featureIconWrapper} style={{ backgroundColor: `${item.color}20` }}>
                  <div className={styles.featureIconContainer} style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                
                <div className={styles.featureContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className={styles.featureHoverEffect}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section with Floating Animation */}
      <section 
        className={styles.helpSection} 
        ref={el => sectionRefs.current.help = el}
      >
        <div className={styles.helpContainer}>
          <div className={`${styles.helpContent} ${isVisible.help ? styles.visible : ''}`}>
            <div className={styles.helpTextSide}>
              <div className={styles.helpBadge}>
                <CheckCircle size={18} />
                <span>Expert Team</span>
              </div>
              
              <h2>
                We're Here <span>To Help</span>
              </h2>
              
              <p>
                At Freedom HR we become an invaluable resource within your
                business, teaming up as your HR expert and freeing you to
                concentrate on other areas of your business. We offer a scalable
                and cost-effective solution and become your friend and trusted
                advisor.
              </p>

              <div className={styles.helpStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Clients Served</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Satisfaction</span>
                </div>
              </div>
              
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  <img src={image2} alt="Farah Mody" />
                </div>
                <div className={styles.authorDetails}>
                  <strong>Farah Mody</strong>
                  <span>Director</span>
                </div>
              </div>
            </div>

            <div className={styles.helpImageSide}>
              <div className={styles.floatingBlob}>
                <div className={styles.blobShape}>
                  <img src={image2} alt="Director" />
                </div>
                <div className={styles.experienceBadge}>
                  <span className={styles.expNumber}>10+</span>
                  <span>Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};