import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  barChartData = {
    labels: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets:[
      {
        data:[89,34,43,54,28,74,93],
        label:'Sales Percent',
        backgrounColor: 'rgba(255,255,0,0.3)'
      
      }
    ]
  }

}
