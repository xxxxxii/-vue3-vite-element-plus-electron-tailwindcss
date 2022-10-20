import { EChartsOption } from "echarts";
import { EChartsOption as EChartsWordOption } from "echarts-wordcloud";

export const lineOptions: EChartsOption = {
  title: {
    text: "analysis.monthlySales",
    left: "center",
  },
  xAxis: {
    data: [
      "analysis.january",
      "analysis.february",
      "analysis.march",
      "analysis.april",
      "analysis.may",
      "analysis.june",
      "analysis.july",
      "analysis.august",
      "analysis.september",
      "analysis.october",
      "analysis.november",
      "analysis.december",
    ],
    boundaryGap: false,
    axisTick: {
      show: false,
    },
  },
  grid: {
    left: 20,
    right: 20,
    bottom: 20,
    top: 80,
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
    padding: [5, 10],
  },
  yAxis: {
    axisTick: {
      show: false,
    },
  },
  legend: {
    data: ["analysis.estimate", "analysis.actual"],
    top: 50,
  },
  series: [
    {
      name: "analysis.estimate",
      smooth: true,
      type: "line",
      data: [100, 120, 161, 134, 105, 160, 165, 114, 163, 185, 118, 123],
      animationDuration: 2800,
      animationEasing: "cubicInOut",
    },
    {
      name: "analysis.actual",
      smooth: true,
      type: "line",
      itemStyle: {},
      data: [120, 82, 91, 154, 162, 140, 145, 250, 134, 56, 99, 123],
      animationDuration: 2800,
      animationEasing: "quadraticOut",
    },
  ],
};

export const pieOptions: EChartsOption = {
  title: {
    text: "analysis.userAccessSource",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: [
      "analysis.directAccess",
      "analysis.mailMarketing",
      "analysis.allianceAdvertising",
      "analysis.videoAdvertising",
      "analysis.searchEngines",
    ],
  },
  series: [
    {
      name: "analysis.userAccessSource",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "analysis.directAccess" },
        { value: 310, name: "analysis.mailMarketing" },
        { value: 234, name: "analysis.allianceAdvertising" },
        { value: 135, name: "analysis.videoAdvertising" },
        { value: 1548, name: "analysis.searchEngines" },
      ],
    },
  ],
};

export const barOptions: EChartsOption = {
  title: {
    text: "analysis.weeklyUserActivity",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: 50,
    right: 20,
    bottom: 20,
  },
  xAxis: {
    type: "category",
    data: [
      "analysis.monday",
      "analysis.tuesday",
      "analysis.wednesday",
      "analysis.thursday",
      "analysis.friday",
      "analysis.saturday",
      "analysis.sunday",
    ],
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "analysis.activeQuantity",
      data: [13253, 34235, 26321, 12340, 24643, 1322, 1324],
      type: "bar",
    },
  ],
};

export const radarOption: EChartsOption = {
  legend: {
    data: ["workplace.personal", "workplace.team"],
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "workplace.quote", max: 65 },
      { name: "workplace.contribution", max: 160 },
      { name: "workplace.hot", max: 300 },
      { name: "workplace.yield", max: 130 },
      { name: "workplace.follow", max: 100 },
    ],
  },
  series: [
    {
      name: `xxx${"workplace.index"}`,
      type: "radar",
      data: [
        {
          value: [42, 30, 20, 35, 80],
          name: "workplace.personal",
        },
        {
          value: [50, 140, 290, 100, 90],
          name: "workplace.team",
        },
      ],
    },
  ],
};

export const wordOptions: EChartsWordOption = {
  series: [
    {
      type: "wordCloud",
      gridSize: 2,
      sizeRange: [12, 50],
      rotationRange: [-90, 90],
      shape: "pentagon",
      width: 600,
      height: 400,
      drawOutOfBound: true,
      textStyle: {
        color: function () {
          return (
            "rgb(" +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(",") +
            ")"
          );
        },
      },
      emphasis: {
        textStyle: {
          shadowBlur: 10,
          shadowColor: "#333",
        },
      },
      data: [
        {
          name: "Sam S Club",
          value: 10000,
          textStyle: {
            color: "black",
          },
          emphasis: {
            textStyle: {
              color: "red",
            },
          },
        },
        {
          name: "Macys",
          value: 6181,
        },
        {
          name: "Amy Schumer",
          value: 4386,
        },
        {
          name: "Jurassic World",
          value: 4055,
        },
        {
          name: "Charter Communications",
          value: 2467,
        },
        {
          name: "Chick Fil A",
          value: 2244,
        },
        {
          name: "Planet Fitness",
          value: 1898,
        },
        {
          name: "Pitch Perfect",
          value: 1484,
        },
        {
          name: "Express",
          value: 1112,
        },
        {
          name: "Home",
          value: 965,
        },
        {
          name: "Johnny Depp",
          value: 847,
        },
        {
          name: "Lena Dunham",
          value: 582,
        },
        {
          name: "Lewis Hamilton",
          value: 555,
        },
        {
          name: "KXAN",
          value: 550,
        },
        {
          name: "Mary Ellen Mark",
          value: 462,
        },
        {
          name: "Farrah Abraham",
          value: 366,
        },
        {
          name: "Rita Ora",
          value: 360,
        },
        {
          name: "Serena Williams",
          value: 282,
        },
        {
          name: "NCAA baseball tournament",
          value: 273,
        },
        {
          name: "Point Break",
          value: 265,
        },
      ],
    },
  ],
};
