import React,{useState,useCallBack,useEffect} from 'react';
import ReactDom from 'react-dom';
import {csv,arc,pie,scaleBand,scaleLinear,max} from 'd3';


const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';


const width = 960;
const height = 500;
const margin = {top:20,right:20,bottom:20,left:20};

const app =()=>{
  const [data,setData] = useState(null);

  useEffect(()=>{
    const row = d=>{
      d.Population = +d['2020'];
      return d;
    };
    csv(csvUrl,row).then(setData);
  },[]);

  if (!data){
    return <pre>Loading...</pre>;
  }
const innerHeight = height-margin.top-margin.bottom;
const innerWidth = width-margin.left - margin.right;
    
const yScale = d3.scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.Population)])
    .range([0, innerWidth]);

return (
  <svg width={width} height={height}>
  {data.map(d=><rect x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()} />)}</svg>
);

};
