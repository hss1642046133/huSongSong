<template>
  <div id="bingtu">
    <div id="chartPie3" style="width: 100%; height: 400px; margin-top: -80px"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BingTu3",
  data() {
    return {
      chartPie3: null,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie3 = echarts.init(document.getElementById("chartPie3"));
      this.chartPie3.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: 50,
          data: ["正在处理", "已修复", "未修复"],
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
              { value: 230, name: "正在处理" },
              { value: 360, name: "已修复" },
              { value: 440, name: "未修复" }
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