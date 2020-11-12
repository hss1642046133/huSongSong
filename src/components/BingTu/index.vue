<template>
  <div id="bingtu">
    <div id="chartPie" style="width: 100%; height: 400px;margin-top: -130px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BingTu",
  data() {
    return {
      chartPie: null,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie = echarts.init(document.getElementById("chartPie"));
      this.chartPie.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: 10,
          data: ["毛坏", "简装", "糖装", "豪华装饰"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 170, name: "毛坏" },
              { value: 170, name: "简装" },
              { value: 230, name: "糖装" },
              { value: 350, name: "豪华装饰" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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