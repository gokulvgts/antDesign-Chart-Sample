import React from "react";
import { Column } from "@ant-design/plots";
import { Outlet } from "react-router-dom";

const DemoColumn = () => {
  const data = [
    {
      type: "Area1",
      sales: 38,
    },
    {
      type: "Area2",
      sales: 52,
    },
    {
      type: "Area3",
      sales: 61,
    },
    {
      type: "Area4",
      sales: 140,
    },
    {
      type: "Area5",
      sales: 48,
    },
    {
      type: "Area6",
      sales: 38,
    },
    {
      type: "Area7",
      sales: 38,
    },
    {
      type: "Area8",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      position: "top",
      style: {
        fill: "#5B8FF9",
        opacity: 2.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "category",
      },
      sales: {
        alias: "sales",
      },
    },
  };
  return (
    <div style={{display:"flex"}}>
     <Column {...config} />
  <Outlet/>
    </div>
 )
};

export default DemoColumn;
