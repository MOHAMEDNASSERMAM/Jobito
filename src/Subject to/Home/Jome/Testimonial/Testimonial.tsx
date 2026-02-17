import { useRef } from "react";
import { reviews } from "../../../../Data/index";
import "./Testimonial.css";

export default function Testimonial() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const ReviewCard = ({ img, name, username, body }) => (
    <figure className="review-card" onMouseEnter={() => {}} onMouseLeave={() => {}}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" , cursor:"pointer"}}>
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
    <div className="testimonial">
      <h2>Hear From My Clients</h2>

      <div style={{ position: "relative", width: "100%" }}>
        <div ref={firstRowRef} className="marquee pause">
          {firstRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        <div ref={secondRowRef} className="marquee reverse pause" style={{ marginTop: "1rem" }}>
          {secondRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>
      </div>
    </div>
  );
}
