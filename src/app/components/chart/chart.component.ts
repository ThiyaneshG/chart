import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


declare var google: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      inputs: new FormArray([new FormControl()])
    });
  }

  get inputControls() {
    return this.signUpForm.get('inputs') as FormArray;
  }

  addInput() {
    this.inputControls.push(new FormControl());
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    // Perform form submission logic
  }
  
//   @ViewChild('chart', { static: true }) private chartContainer: ElementRef;
  
//   inputValue1: number|any;
//   inputValue2: number|any;
//   inputValue3:number|any;

//   ngAfterViewInit() {
//     this.drawChart();
//   }

//   drawChart() {
//     const data = [
//       { label: 'Input 1', value: this.inputValue1 },
//       { label: 'Input 2', value: this.inputValue2 },
//       { label: 'Input 3', value: this.inputValue3 }
//     ];

//     const width = 400;
//     const height = 400;
//     const radius = Math.min(width, height) / 2;

//     const svg = d3.select(this.chartContainer.nativeElement)
//       .append('svg')
//       .attr('width', width)
//       .attr('height', height)
//       .append('g')
//       .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

//     const color = d3.scaleOrdinal()
//       .range(['#007bff', '#ffc107', '#28a745']);

//     const pie = d3.pie()
//       .value((d: any) => d.value);

//     const dataReady = pie(data);

//     const arc = d3.arc()
//       .innerRadius(radius * 0.5)
//       .outerRadius(radius * 0.8);
//       svg.selectAll('slices')
//       .data(dataReady)
//       .enter()
//       .append('path')
//       .attr('d', arc)
//       .attr('fill', (d: any) => color(d.data.label))
//       .attr('stroke', 'white')
//       .style('stroke-width', '2px')
//       .style('opacity', 0.7);
//   }
    
//   }
  

// // chair_value :any;
// //  table_value: any;
// //   lamp_value : any;
// //   chart_chair_value:any;
// //   newDataValue:any;

// //   getChairValue(val: string) {
    
// //     this.chair_value = val;
    
    
// //   }
// //   getTableValues(val: string) {
// //     this.table_value= val;
// //   }
// //   getLampVal(val: string) {
// //     this.lamp_value = val;
// //   }
  
// //   inputValue1: number | any;
// //   inputValue2: number | any;
// //   inputValue3: number | any;
  
// //   Labels = ['Number Of Chairs', 'Number Of Table', 'Number Of Lamp'];
// // colors =[' #1D716C',
// // '#B1BAC1',
// // '#CCAB82',];

  





 



// // dataVariable= ['','',''];
// // updateChart() {
// //   this.newDataValue = [this.chair_value,this.table_value,this.lamp_value];
// //   console.log(this.newDataValue);
 
// //   this.dataVariable.push(this.newDataValue); 
 


 
// // }

// //   public chart: any;
// //   createChart() {
// //     console.log(this.dataVariable);
// //     this.chart = new Chart("MyChart", {
// //       type: 'doughnut', //this denotes tha type of chart

// //       data: {// values on -Axis
// //         labels: this.Labels,
// //         datasets: [{
// //           data:,
// //           backgroundColor: this.colors,
// //           hoverOffset: 20
// //         }],
// //       },
// //       options: {
// //         aspectRatio: 1.5,
// //         plugins: {
// //           legend: {
// //             labels: {
// //               usePointStyle: true,
// //               pointStyle: "circle",

// //             }
// //           }
// //         }

// //       }

// //     });
// //   }
// // .
// }
}