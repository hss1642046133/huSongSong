<template>
  <div id="bingtu">
    <div id="chartPie1" style="width: 100%; height: 400px; margin-top: -80px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BingTu1",
  data() {
    return {
      chartPie1: null,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie1 = echarts.init(document.getElementById("chartPie1"));
      this.chartPie1.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: 50,
          data: ["在线", "离线", "忙碌"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 230, name: "在线" },
              { value: 360, name: "离线" },
              { value: 440, name: "忙碌" }
            ],
          },
        ],
      });
    },
    drawCharts() {
      this.drawPieChart();
    },
  },
  mounted: function () {
    this.drawCharts();
  },
};
</script>