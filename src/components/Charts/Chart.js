import react, {useState} from "react";

import ChartBar from './ChartBar';

import './Chart.css';


const Chart = (props) => {
    const { dataPoints } = props;

    let dataPointValues = dataPoints.map(dataPoint => dataPoint.value );

    const totalMaximum = Math.max(...dataPointValues);

    console.log(dataPoints);

    return (
        <div className="chart">
            { dataPoints.map( (dataPoint) => {
                return <ChartBar
                  key={dataPoint.label}
                  value={dataPoint.value}
                  max={totalMaximum}
                  label={dataPoint.label}
                />   
            })}
        </div>
    )
}

export default Chart;