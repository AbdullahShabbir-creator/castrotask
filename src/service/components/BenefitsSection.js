import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const benefits = [
  {
    title: "General Benefits",
    points: [
      "Boost sales productivity (20% increase)",
      "Cut down time spent on manual tasks (25% decrease)",
      "Improve sales team collaboration (30% improvement)",
    ],
  },
  {
    title: "Sales Manager Benefits",
    points: [
      "Track lead and opportunity performance in real-time",
      "Streamline task and follow-up assignments",
      "Easily manage sales team goals and KPIs",
    ],
  },
  {
    title: "Owner Benefits",
    points: [
      "Access comprehensive sales data and analytics",
      "Gain insights into team and departmental performance",
      "Track overall sales performance across the company",
    ],
  },
];

const BenefitsSection = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">
        Out Services Delivers Best-In-Class Benefits
      </h2>
      <div className="row">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-md-4">
            <div
              className="p-4 shadow-sm rounded-4"
              style={{ backgroundColor: "#fff", minHeight: "250px" }}
            >
              <h5 className="fw-bold">{benefit.title}</h5>
              <ul className="list-unstyled mt-3">
                {benefit.points.map((point, i) => (
                  <li key={i} className="d-flex align-items-start">
                    <span
                      className="me-2"
                      style={{ color: "green", fontSize: "1.2rem" }}
                    >
                      ▶
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
