import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  pieChartData = {
    labels: ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets:[
      {
        data:[89,34,43,54,28,74,93],
        label:'Sales Percent',
        backgrounColor: 'rgba(255,255,0,0.3)'
      
      }
    ]
  }

  pieChartOptions = {
    responsive:false
  }

}
