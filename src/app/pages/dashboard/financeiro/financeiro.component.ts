import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  invoiceBehavior:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  invoice:any[] = [];
  invoiceLabel:any[] = [];
  obj: any;
  data: any;

  constructor(private invoicesService: InvoiceService) { }

  ngOnInit(): void {
    this.invoice = [];
    this.invoiceBehavior.subscribe(v => {
      if(v.length > 0){
        this.invoice = v;
        this.invoiceLabel = v;
        let invoices = v.filter(x => x.AMOUNT || false).map(x => {return x.AMOUNT});
        let invoiceLabel = v.filter(y => y.CREATED_AT || false).map(y => {return y.CREATED_AT});
        console.log(invoices)
        console.log(invoiceLabel)
        if(invoices.length > 0){
          this.barChartData[0].data = invoices;
          this.barChartLabels = invoiceLabel;
        }
      }
    })
    this.callInvoices()
  }

  callInvoices(){
    this.invoicesService.getInvoices().subscribe(obj => this.invoiceBehavior.next(obj));
    //console.log(this.invoice.map(obj => { return obj.WEDDING_ID }))
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
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [],
      label: 'Total gasto',
      backgroundColor: '#3b69ff',
      hoverBorderColor: '#3b69ff',
      hoverBackgroundColor: '#3b69ff',
      borderColor: '#3b69ff'
    },
  ];

}
