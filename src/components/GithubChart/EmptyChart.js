import "./styles.scss";

const EmptyChart = ({ accessibleId }) => {
  return (
    <div className="github-chart__chart">
      {Array.from(Array(31), () => new Array(7).fill(0)).map((items, index) => {
        return (
          <div key={index} className="github-chart__row">
            {items.map((subItems, sIndex) => {
              return (
                <div
                  key={sIndex}
                  id={accessibleId ? `github-chart__${index}_${sIndex}` : ``}
                  className="github-chart__cell"
                >
                  { }
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default EmptyChart;
