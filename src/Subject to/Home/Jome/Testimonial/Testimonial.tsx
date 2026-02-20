import { useRef } from "react";
import { reviews } from "../../../../Data/index";
import Styles from "./Testimonial.module.css";

type TestimonialProps = {
  img: string;
  name: string;
  username: string;
  body: string;
};

export default function Testimonial() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const ReviewCard = ({ img, name, username, body }: TestimonialProps) => (
    <figure
      className={Styles.reviewCard}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <img src={img} alt={name} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <figcaption>{name}</figcaption>
          <p>{username}</p>
        </div>
      </div>
      <blockquote>{body}</blockquote>
    </figure>
  );

  const firstRow = [...reviews, ...reviews];
  const secondRow = [...reviews, ...reviews];

  return (
    <div className={Styles.testimonial}>
      <h2>Hear From My Clients</h2>

      <div style={{ position: "relative", width: "100%" }}>
        <div ref={firstRowRef} className={`${Styles.marquee} ${Styles.pause}`}>
          {firstRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        <div
          ref={secondRowRef}
          className={`${Styles.marquee} ${Styles.reverse} ${Styles.pause}`}
          style={{ marginTop: "1rem" }}
        >
          {secondRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        <div className={Styles.gradientLeft}></div>
        <div className={Styles.gradientRight}></div>
      </div>
    </div>
  );
}
