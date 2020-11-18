import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  financesBehavior:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  finances:any[] = [];
  financesLabel:any[] = [];
  obj: any;
  data: any;

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    this.finances = [];
    this.financesBehavior.subscribe(v => {
      if(v.length > 0){
        this.finances = v;
        this.financesLabel = v;
        let financess = v.filter(x => x.vendor_id || false).map(x => {return x.vendor_id});
        let financesLabel = v.filter(y => y.wedding_id || false).map(y => {return y.wedding_id});
        console.log(financess)
        console.log(financesLabel)
        if(financess.length > 0){
          this.barChartData[0].data = financess;
          this.barChartLabels = financesLabel;
        }
      }
    })
    this.callFinances()
  }

  callFinances(){
    this.financeService.getFinances().subscribe(obj => this.financesBehavior.next(obj));
    //console.log(this.finances.map(obj => { return obj.WEDDING_ID }))
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 100,
        top: 0,
        bottom: 20
      }
    },
    legend: {
      display: true,
      position: 'top',
      align: 'start',
      labels: {
        fontColor: 'rgb(0, 0, 0,1)',
        usePointStyle: true,
        boxWidth: 5,
        border: 0

      }
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
        },
        barPercentage: 0.4
      }],
      xAxes: [{
        gridLines: {
          offsetGridLines: false,
          display: false
        },
        ticks: {
          display: false
        },
      }]
    },
    tooltips: {
      mode: 'index',
      backgroundColor: '#ffffff',
      title: false,
      bodyFontColor: '#000000',
      bodySpacing: 10,
      position: 'nearest',
      cornerRadius: 6

    }
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [],
      label: 'Fornecedor',
      backgroundColor: '#3b69ff',
      hoverBorderColor: '#3b69ff',
      hoverBackgroundColor: '#3b69ff',
      borderColor: '#3b69ff'
    },
  ];

}
