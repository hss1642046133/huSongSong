<template>
  <div id="zhexiantu">
    <div id="chartPie9" style="width: 100%; height: 500px;margin-top: 0px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ZheXianTu",
  data() {
    return {
      chartPie9: null
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie9 = echarts.init(document.getElementById("chartPie9"));
      this.chartPie9.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["before_seven", "am", "noon", "pm"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["蓝牙", "App", "WIFI", "门禁卡", "指纹识别", "人脸识别", "语音识别"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "before_seven",
            type: "line",
            stack: "总量",
            data: [1, 11, 21, 14.5, 0, 21.5, 25.2]
          },
          {
            name: "am",
            type: "line",
            stack: "总量",
            data: [3, 22, 32, 8.5, 0, 15.2, 17]
          },
          {
            name: "noon",
            type: "line",
            stack: "总量",
            data: [5, 33, 43, 8.5, 0, 15.2, 8]
          },
          {
            name: "pm",
            type: "line",
            stack: "总量",
            data: [7, 44, 54, 14.5, 1, 21.5, 25.2]
          }
        ]
      });
    },
    drawCharts() {
      this.drawPieChart();
    }
  },
  mounted: function() {
    this.drawCharts();
  }
};
</script>