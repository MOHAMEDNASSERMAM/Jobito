import styles from "./BannerSection.module.css";
import image2 from "../.../../../../assets/Img/Gemini_Generated_Image_lk4biqlk4biqlk4b.png";

export const BannerSection = ()=> {
  return (
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
  );
};
