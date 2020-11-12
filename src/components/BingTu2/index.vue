<template>
  <div id="bingtu">
    <div id="chartPie2" style="width: 100%; height: 400px;margin-top: -130px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "BingTu2",
  data() {
    return {
      chartPie2: null,
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie2 = echarts.init(document.getElementById("chartPie2"));
      this.chartPie2.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: 10,
          data: ["正在预约", "预约成功", "预约失败"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 115, name: "正在预约" },
              { value: 170, name: "预约成功" },
              { value: 250, name: "预约失败" }
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