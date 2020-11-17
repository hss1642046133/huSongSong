<template>
  <div id="zhuzhuangtu">
    <div id="chartPie6" style="width: 100%; height: 280px;margin-top: -30px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ZhuZhuangTu",
  data() {
    return {
      chartPie6: null
    };
  },
  methods: {
    drawPieChart() {
      this.chartPie6 = echarts.init(document.getElementById("chartPie6"));
      this.chartPie6.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["qian", "today"],
          left: "center",
          bottom: 10,
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "昨天",
              "今天"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "qian",
            type: "bar",
            data: [
              10,
              9.6
            ],
            itemStyle:{ normal:{ color:'#3aa1ff' } }
          },
          {
            name: "today",
            type: "bar",
            data: [
              2,
              5
            ],
            itemStyle:{ normal:{ color:'#4ecb73' } }
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