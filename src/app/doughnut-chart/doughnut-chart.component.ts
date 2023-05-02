import { Component } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  doughnutChartData = {
    labels: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets:[
      {
        data:[89,34,43,54,28,74,93],
        label:'Sales Percent',
        backgrounColor: 'rgba(255,255,0,0.3)'
      
      }
    ]
  }

  doughnutChartOptions = {
    responsive:false
  }

}
