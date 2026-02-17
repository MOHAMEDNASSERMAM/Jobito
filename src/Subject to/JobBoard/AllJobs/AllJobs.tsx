import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AllJobs.css";
import { FaHeart } from "react-icons/fa";
import jobsData from "../../../Data/JobBoard.json";

type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  categories: string[];
  applied: number;
  capacity: number;
};

type AllJobsProps = {
  size?: number;
  color?: string;
};

const AllJobs: React.FC<AllJobsProps> = ({ size = 20, color = "#ff4d4f" }) => {
  const navigate = useNavigate();
  const allJobs: Job[] = jobsData.jobs;

  const employmentTypes = allJobs.reduce((acc: Record<string, number>, job) => {
    acc[job.type] = (acc[job.type] || 0) + 1;
    return acc;
  }, {});

  const jobCategories = allJobs.reduce((acc: Record<string, number>, job) => {
    job.categories.forEach((cat) => {
      acc[cat] = (acc[cat] || 0) + 1;
    });
    return acc;
  }, {});

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  const [keyword, setKeyword] = useState("");
  const [selectedEmployment, setSelectedEmployment] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredJobs = allJobs.filter((job) => {
    const keywordMatch =
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(keyword.toLowerCase());

    const employmentMatch =
      selectedEmployment.length === 0 ||
      selectedEmployment.some((item) => job.type === item);

    const categoryMatch =
      selectedCategories.length === 0 ||
      job.categories.some((cat) => selectedCategories.includes(cat));

    return keywordMatch && employmentMatch && categoryMatch;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="jobs-page">
      {/* Sidebar Filters */}
      <aside className="sidebar">
        <Filter
          title="Search Keyword"
          items={[]}
          selected={[]}
          setSelected={() => {}}
          isInput
          keyword={keyword}
          setKeyword={setKeyword}
        />

        <Filter
          title="Type of Employment"
          items={Object.entries(employmentTypes).map(
            ([key, val]) => `${key} (${val})`,
          )}
          selected={selectedEmployment}
          setSelected={setSelectedEmployment}
          isSingleSelect={true}
        />

        <Filter
          title="Categories"
          items={Object.entries(jobCategories).map(
            ([key, val]) => `${key} (${val})`,
          )}
          selected={selectedCategories}
          setSelected={setSelectedCategories}
        />
      </aside>

      {/* Jobs List */}
      <main className="jobs-content">
        <div className="jobs-header">
          <h2>All Jobs</h2>
          <p>Showing {filteredJobs.length} results</p>
        </div>

        {currentJobs.length === 0 && <p>No jobs found.</p>}

        {currentJobs.map((job, index) => (
          <div className="job-row" key={index}>
            <div className="job-left">
              <div className="logo-placeholder">Logo</div>
              <div>
                <h3>{job.title}</h3>
                <p>
                  {job.company} · {job.location} · {job.type}
                </p>
                <div className="tags">
                  {job.categories.map((cat, i) => (
                    <span
                      key={i}
                      className={`tag ${cat.toLowerCase().replace(/\s+/g, "")}`}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="job-right">
              <div className="fabutter">
                <div className="like">
                  <FaHeart size={size} color={color} />
                </div>
                <button
                  className="apply-btn "
                  onClick={() => navigate("/Job details")}
                >
                  Apply
                </button>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${Math.min(
                      (job.applied / job.capacity) * 100,
                      100,
                    )}%`,
                  }}
                />
              </div>

              <span className="applied-text">
                {job.applied} applied of {job.capacity} capacity
              </span>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={page === currentPage ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            &gt;
          </button>
        </div>
      </main>
    </div>
  );
};

type FilterProps = {
  title: string;
  items: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  isInput?: boolean;
  keyword?: string;
  setKeyword?: React.Dispatch<React.SetStateAction<string>>;
  isSingleSelect?: boolean;
};

const Filter: React.FC<FilterProps> = ({
  title,
  items,
  selected,
  setSelected,
  isInput = false,
  keyword,
  setKeyword,
  isSingleSelect = false,
}) => {
  const handleChange = (item: string) => {
    const actualValue = item.split(" (")[0];

    if (isSingleSelect) {
      if (selected.includes(actualValue)) {
        setSelected([]);
      } else {
        setSelected([actualValue]);
      }
    } else {
      if (selected.includes(actualValue)) {
        setSelected(selected.filter((i) => i !== actualValue));
      } else {
        setSelected([...selected, actualValue]);
      }
    }
  };

  if (isInput) {
    return (
      <div className="filter">
        <h4>{title}</h4>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword && setKeyword(e.target.value)}
          placeholder="Type to search..."
        />
      </div>
    );
  }

  return (
    <div className="filter">
      <h4>{title}</h4>
      {items.map((item, i) => (
        <label key={i}>
          <input
            type={isSingleSelect ? "radio" : "checkbox"}
            checked={selected.includes(item.split(" (")[0])}
            onChange={() => handleChange(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default AllJobs;
