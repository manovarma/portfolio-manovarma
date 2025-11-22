import React from "react";
import Footer from "./Footer";

const ProjectCard = ({ title, description, git, technologies }) => {
  return (
    <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow">
      <div className="p-4 sm:p-6">
        <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
          {title}
        </h5>
        <p className="font-normal mt-2 text-gray-300">{description}</p>
      </div>

      <div className="m-4 flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-400">
              #{tag}
            </p>
          ))}
        </div>

        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-300 border border-gray-400 rounded-lg shadow p-2 hover:text-green-400 duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

// ===========================
// YOUR PROJECTS (FINAL)
// ===========================

export const project = [
  {
    title: "Renewable Energy Comparison – Germany vs France",
    description:
      "A Power BI analytics project comparing renewable energy production, consumption, and trends between Germany and France. Includes KPI indicators, time-series visuals, and country-level energy insights.",
    git: "https://github.com/manovarma/Renewable-Energy-Comparsion-Germany-vs-France-Power-BI-.git",
    technologies: ["PowerBI", "DataVisualization", "EnergyAnalytics"],
  },
  {
    title: "Attrition Analysis Dashboard",
    description:
      "A dynamic Power BI dashboard analyzing employee attrition, demographics, job satisfaction, and HR trends. Built interactive visuals and DAX measures for insights into workforce behavior.",
    git: "https://github.com/manovarma/Power-BI-Attrition-Analysis.git",
    technologies: ["PowerBI", "DAX", "HRAnalytics"],
  },
  {
    title: "COVID-19 Data Analysis (SQL)",
    description:
      "A complete SQL project analyzing global COVID-19 deaths, infections, and vaccination data. Performed data cleaning, aggregation, window functions, joins, and analytical queries.",
    git: "https://github.com/manovarma/COVID-Data-analysis-SQL-Project.git",
    technologies: ["SQL", "DataCleaning", "DataAnalysis"],
  },
  {
    title: "Sales of Bikes – Excel Dashboard",
    description:
      "Designed an interactive Excel dashboard analyzing bike sales trends, customer demographics, revenue regions, and purchase behavior using pivot tables and visual charts.",
    git: "https://github.com/manovarma/Sales-of-Bikes---Excel-Dashboard.git",
    technologies: ["Excel", "Dashboarding", "DataVisualization"],
  },
  {
    title: "Real Estate Price Prediction",
    description:
      "A machine learning project predicting real-estate prices using regression models. Includes feature engineering, data preprocessing, EDA, and model performance evaluation.",
    git: "https://github.com/manovarma/Real-Estate-Prediction.git",
    technologies: ["Python", "ML", "ScikitLearn", "Regression"],
  },
  {
    title: "Bank Customer Churn Prediction – CRISP-DM",
    description:
      "A churn prediction system built using CRISP-DM with three models: Bayesian Networks, Random Forest, and Logistic Regression. Applied encoding, SMOTE, discretization, and threshold tuning. Random Forest delivered the best overall accuracy and AUC, while Bayesian Networks achieved the highest recall for identifying at-risk customers.",
    git: "https://github.com/manovarma/Application-of-Data-Science-in-Finance",
    technologies: ["Python", "ML", "BayesianNetwork", "RandomForest", "LogisticRegression", "SMOTE"]
  }
  
  {
    title: "Effective Billboard Analysis – Geo Analytics",
    description:
      "A Geo-Analytics project using spatial data to evaluate billboard visibility, traffic flow, and optimal advertising locations. Includes spatial joins, map layers, and visual insights.",
    git: "https://github.com/manovarma/Effective-Billboard-analysis-geo-Analytics-.git",
    technologies: ["GIS", "GeoAnalytics", "ArcGIS", "SpatialAnalysis"],
  },
];

export default Projects;
