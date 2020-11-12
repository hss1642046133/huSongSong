<template>
  <div id="ZhuZhuangTu">
    <div id="chartPie4" style="width: 100%; height: 260px;margin-top: -20px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ZhuZhuangTu",
  data() {
    return {
      chartPie4: null,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie4 = echarts.init(document.getElementById("chartPie4"));
      this.chartPie4.setOption({
        color: ["#38a0ff"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["水费", "电费", "停车费", "燃气费", "固化宽带费", "有线电视费", "物业费"],
            axisTick: {
              alignWithLabel: true,
              fontSize: 12
            },
          },
        ],
        yAxis: [
          {
            type: "value"
          },
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [1000, 2500, 2000, 2000, 1500, 250, 750],
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