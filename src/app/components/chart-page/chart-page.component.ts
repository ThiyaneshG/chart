import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent implements OnInit {
  pieChartForm!: FormGroup;

  
  chartData1 : number[] = [];
  chartData2 : number[] = [];
  chartData3 : number[] = [];

  ngOnInit(): void {
    this.createChart();
    this.pieChartForm = new FormGroup(
      {
        Chair: new FormControl(this.chartData1),
        Table: new FormControl(this.chartData2),
        lamp: new FormControl(this.chartData3),

      }
    )
  }

  createCharts(){
    this.pushFormDataIntoChart();
    
  }
  pushFormDataIntoChart(){
    this.chartData1.push(this.pieChartForm.value.Chair);
    this.chartData2.push(this.pieChartForm.value.Table);
    this.chartData3.push(this.pieChartForm.value.lamp);
  }
  

  

chair_value :any;
 table_value: any;
  lamp_value : any;
  chart_chair_value:any;
  newDataValue:any;

  getChairValue(val: string) {
    console.log(val);
    this.chair_value = val;
    
    if (this.newDataValue !== undefined) {
      // Assuming you want to update the first data value
      
    }
  }
  getTableValues(val: string) {
    this.table_value= val;
  }
  getLampVal(val: string) {
    this.lamp_value = val;
  }
  

  


  public chart: any;
  createChart() {
    let labeldata=
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on -Axis
        labels: ['Number Of Chairs', 'Number Of Table', 'Number Of Lamp'],
        datasets: [{
          data: [34,66,88],
          backgroundColor: [
            ' #1D716C',
            '#B1BAC1',
            '#CCAB82',
          ],
          hoverOffset: 20
        }],
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: "circle",

            }
          }
        }

      }

    });
  }
}
