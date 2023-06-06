import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css']
})
export class ChartPageComponent  {
  pieChartForm: FormGroup;

  
  

  
    

  constructor() {
    this.pieChartForm = new FormGroup({
      Chairs: new FormControl(''),
      Table: new FormControl(''),
      Lamp: new FormControl(''),
    });
  }
  
  

  


  

  
message: string|any; 


  public chart: any;
  createChart() {
   
  
  console.log( this.pieChartForm.value.Chairs ,this.pieChartForm.value.Table,this.pieChartForm.value.Lamp);
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on -Axis
        labels: ['Number Of Chairs', 'Number Of Table', 'Number Of Lamp'],
        datasets: [{
          data: [this.pieChartForm.value.Chairs ,this.pieChartForm.value.Table,this.pieChartForm.value.Lamp],
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
