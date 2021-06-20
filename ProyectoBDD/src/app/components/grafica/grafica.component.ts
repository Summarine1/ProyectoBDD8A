import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LinuxService } from 'src/app/services/linux/linux.service';
import { WindowsService } from 'src/app/services/windows/windows.service';
Chart.register(...registerables);

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
})
export class GraficaComponent implements OnInit {
  private chart: any = null;
  canvas: any;
  ctx: any;

  
  constructor(private Windows:WindowsService, private Linux:LinuxService) {  
  }

  ngOnInit(): void {
    this.Windows.getBudgets().subscribe((data:any[])=>{
      var myChart = new Chart('myChart', {
        type: 'bar',
        data: {
          labels: ['menor que 150000', ' entre 150000 y 250000', 'mayor que 250000' ],
          datasets: [
            {
              label: '# de Presupuesto por Rango',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    this.Windows.getDurations().subscribe((data:any[])=>{ 
      var myChart2 = new Chart('myChart2', {
        type: 'bar',
        data: {
          labels: ['menor que 15', ' entre 15 y 29', 'mayor que 29' ],
          datasets: [
            {
              label: '# de Duración por Rango',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    this.Linux.getPays().subscribe((data: any[])=>{
      var myChart3 = new Chart('myChart3', {
        type: 'bar',
        data: {
          labels: ['menor que 20000', ' entre 20000 y 35000', 'mayor que 35000'],
          datasets: [
            {
              label: '# de salarios por rango',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    this.Linux.getTitles().subscribe((data: any[])=>{
     console.log(data)
     //separar los labels y los numeros en dos array
      var myChart4 = new Chart('myChart4', {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
  
    
  }
}
