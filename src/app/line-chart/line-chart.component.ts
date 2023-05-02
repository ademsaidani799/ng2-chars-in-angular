import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  lineChartData = {
    labels: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets:[
      {
        data:[89,34,43,54,28,74,93],
        label:'Sales Percent',
        fill: true,
        backgrounColor: 'rgba(255,255,0,0.3)',
        borderColor: 'black', 
        tension: 0.5
      }
    ]
  }

}
