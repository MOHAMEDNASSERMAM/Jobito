import { MapPin, Search } from "lucide-react";
import Styles from "./JobBoard.module.css";
import AllJobs from "../../Subject to/JobBoard/AllJobs/AllJobs";

export default function JobBoard() {
  return (
    <div className="job-board">
      <section className={Styles.heroSection}>
        <div className={Styles.container}>
          <div className={Styles.content}>
            <h1 className={Styles.title}>
              Find your{" "}
              <span className={Styles.purpleText}>
                dream job{" "}
                <svg className={Styles.underline} viewBox="0 0 300 20">
                  <path
                    d="M5 15 Q 40 5, 80 15 T 160 15 T 240 15 T 300 15"
                    stroke="#26A4FF"
                    fill="transparent"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </h1>

            <p className={Styles.description}>
              Find your next career at companies like HubSpot, Nike, and Dropbox
            </p>

            <div className={Styles.searchBar}>
              <div className={Styles.inputGroup}>
                <Search className={Styles.icon} size={20} />
                <input type="text" placeholder="Job title or keyword" />
              </div>

              <div className={Styles.divider}></div>

              <div className={Styles.inputGroup}>
                <MapPin className={Styles.icon} size={20} />
                <select defaultValue="Florence">
                  <option value="Florence">Florence, Italy</option>
                  <option value="London">London, UK</option>
                </select>
              </div>

              <button className={Styles.searchBtn}>Search my job</button>
            </div>
          </div>
        </div>
      </section>

      <div className={Styles.cardJobBoard}>
        <AllJobs />
      </div>
    </div>
  );
}
