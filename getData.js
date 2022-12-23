import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/shashankPeddi/32c419db6917c1bdb05bf79ae2a789c4/raw/fd090d49ec9159adffb5a59dcad24c8f2201be49/cricket.csv';
//creating a function to process and parse the data from csv 
export const getData = async () => {
  const data = await csv(csvUrl);
  
  // Have a look at the attributes available in the console!
  console.log(data[0]);

  return data;
};
