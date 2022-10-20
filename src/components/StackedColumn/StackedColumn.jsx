import React from 'react';
import { DualAxes } from '@ant-design/plots';
import DemoColumn from '../DemoColumn/Democolumn.component';
import { useNavigate } from 'react-router-dom';

const SepG = () => {
  const navigate = useNavigate()
  const loan =[
      {
        year: "2016-2017",
        value: 1548,
        type: "TL"
      },
      {
        year: "2016-2017",
        value: 350,
        type: "CCL"
      },
      {
        year: "2016-2017",
        value: 0,
        type: "Composite"
      },
      {
        year: "2017-2018",
        value: 4214,
        type: "TL"
      },
      {
        year: "2017-2018",
        value: 726,
        type: "CCL"
      },
      {
        year: "2017-2018",
        value: 0,
        type: "Composite"
      },
      {
        year: "2018-2019",
        value: 5841,
        type: "TL"
      },
      {
        year: "2018-2019",
        value: 542,
        type: "CCL"
      },
      {
        year: "2018-2019",
        value: 0,
        type: "Composite"
      },
      {
        year: "2019-2020",
        value: 4910,
        type: "TL"
      },
      {
        year: "2019-2020",
        value: 489,
        type: "CCL"
      },
      {
        year: "2019-2020",
        value: 0,
        type: "Composite"
      },
      {
        year: "2020-2021",
        value: 5903,
        type: "TL"
      },
      {
        year: "2020-2021",
        value: 471,
        type: "CCL"
      },
      {
        year: "2020-2021",
        value: 0,
        type: "Composite"
      },
      {
        year: "2021-2022",
        value: 5682,
        type: "TL"
      },
      {
        year: "2021-2022",
        value: 386,
        type: "CCL"
      },
      {
        year: "2021-2022",
        value: 0,
        type: "Composite"
      },
      {
        year: "2022-2023",
        value: 2657,
        type: "TL"
      },
      {
        year: "2022-2023",
        value: 111,
        type: "CCL"
      },
      {
        year: "2022-2023",
        value: 0,
        type: "Composite"
      }
    ];
  const amount =  [
    {
      year: "2016-2017",
      amount: 73.11
    },
    {
      year: "2017-2018",
      "amount": 168.86
    },
    {
      year: "2018-2019",
      amount: 195.87
    },
    {
      year: "2019-2020",
      amount: 183.55
    },
    {
      year: "2020-2021",
      amount: 233.14
    },
    {
      year: "2021-2022",
      amount: 205.53
    },
    {
      year: "2022-2023",
      amount: 85.9
    }
  ];
  const config = {
    data: [loan, amount],
    xField: 'year',
    yField: ['value', 'amount'],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        seriesField: 'type',
      },
      {
        geometry: 'line',
      },
    ],
    onReady:(plot)=>{
      plot.on('plot:click', (args) => {

        // if (args && args.data)
        navigate(`/distict?year=2022;id=1`, {
          
        })
        console.log("Arguments",  args.data.data );
      })
    },
  };
  return <DualAxes {...config} />;
};

export default SepG;
