import React from 'react'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';


class Graph extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const countryData = this.props.countryData
    const weather = countryData.weather
    const data = [
      {x: 0, y: Number(weather.January.tAvg).toFixed(2)},
      {x: 1, y: Number(weather.February.tAvg).toFixed(2)},
      {x: 2, y: Number(weather.March.tAvg).toFixed(2)},
      {x: 3, y: Number(weather.April.tAvg).toFixed(2)},
      {x: 4, y: Number(weather.May.tAvg).toFixed(2)},
      {x: 5, y: Number(weather.June.tAvg).toFixed(2)},
      {x: 6, y: Number(weather.July.tAvg).toFixed(2)},
      {x: 7, y: Number(weather.August.tAvg).toFixed(2)},
      {x: 8, y: Number(weather.September.tAvg).toFixed(2)},
      {x: 9, y: Number(weather.October.tAvg).toFixed(2)},
      {x: 10, y: Number(weather.November.tAvg).toFixed(2)},
      {x: 11, y: Number(weather.December.tAvg).toFixed(2)}
    ];

    const maxTemp = Math.max.apply(Math, data.map(o => o.y))
    const minTemp = Math.min.apply(Math, data.map(o => o.y))

    if (maxTemp === minTemp){
      return (
        <h1>no weather data</h1>
      )
    } else {

      return(
        <section>
          <XYPlot height={100} width={400} yDomain={[minTemp, maxTemp]} xDomain={[0,11]}>
            <LineSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
          </XYPlot>
          </section>
      )
    }
  }

}

export default Graph