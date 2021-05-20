<script>
import { Pie } from "vue3-chart-v2";

export default {
  extends: Pie,
  props: ["labels", "data", "backgroundColor"],
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.backgroundColor,
            data: this.data,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
        },
      }
    );
  },
};
</script>
