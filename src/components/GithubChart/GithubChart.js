import { useState, useEffect } from "react";
import EmptyChart from "./EmptyChart";
import ChartIndices from "./ChartIndices.json";
import "./styles.scss";

const GitHubChart = () => {
  const [soc, setSoc] = useState(0);

  const array = ["ML", "CP", "OS", "DEV", "CS", "PD"];

  useEffect(() => {
    setTimeout(() => {
      setSoc((soc + 1) % array.length);
    }, 3000);
  }, [soc, array.length]);

  return (
    <div>
      <GitHubChartComponent indices={ChartIndices[array[soc]]} />
    </div>
  );
}

const GitHubChartComponent = ({ indices }) => {
  useEffect(() => {
    indices &&
      indices.length &&
      indices.forEach(([r_index, c_index]) => {
        document
          .getElementById(`github-chart__${r_index}_${c_index}`)
          .classList.remove("github-chart__cell");
        document
          .getElementById(`github-chart__${r_index}_${c_index}`)
          .classList.add("github-chart__cell-active");
      });

    setTimeout(() => {
      indices &&
        indices.length &&
        indices.forEach(([r_index, c_index]) => {
          document
            .getElementById(`github-chart__${r_index}_${c_index}`)
            .classList.remove("github-chart__cell-active");
          document
            .getElementById(`github-chart__${r_index}_${c_index}`)
            .classList.add("github-chart__cell");
        });
    }, 3000);
  }, [indices]);

  return (
    <div className="github-chart">
      <div className="github-chart__overlay" />
      <EmptyChart accessibleId={false} />
      <EmptyChart accessibleId={true} />
      <EmptyChart accessibleId={false} />
    </div>
  );
};

export default GitHubChart;
