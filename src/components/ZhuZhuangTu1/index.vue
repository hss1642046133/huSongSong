<template>
  <div id="zhuzhuangtu">
    <div id="chartPie5" style="width: 100%; height: 280px;margin-top: -40px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ZhuZhuangTu",
  data() {
    return {
      chartPie5: null,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie5 = echarts.init(document.getElementById("chartPie5"));
      this.chartPie5.setOption({
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
            data: ["昨天", "今天"],
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
            barWidth: "40%",
            data: [5.5, 9.6],
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