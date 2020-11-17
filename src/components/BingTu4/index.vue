<template>
  <div id="bingtu">
    <div id="chartPie7" style="width: 100%; height: 400px; margin-top: -90px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BingTu3",
  data() {
    return {
      chartPie7: null
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie7 = echarts.init(document.getElementById("chartPie7"));
      this.chartPie7.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          left: "center",
          bottom: 60,
          data: ["出场", "入场"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
                value: 76,
                name: "出场",
                itemStyle: { normal: { color: "#3aa1ff" } }
              },
              {
                value: 23,
                name: "入场",
                itemStyle: { normal: { color: "#36cbcb" } }
              }
            ]
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