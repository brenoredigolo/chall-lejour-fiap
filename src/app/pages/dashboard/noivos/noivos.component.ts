import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EngagedService } from 'src/app/services/engaged.service';

@Component({
  selector: 'app-noivos',
  templateUrl: './noivos.component.html',
  styleUrls: ['./noivos.component.css']
})
export class NoivosComponent implements OnInit {

  engagedBehavior:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  engaged:any[] = [];
  engagedLabel:any[] = [];
  obj: any;
  data: any;

  constructor(private engagedService: EngagedService) { }

  ngOnInit(): void {
    this.engaged = [];
    this.engagedBehavior.subscribe(v => {
      if(v.length > 0){
        this.engaged = v;
        this.engagedLabel = v;
        let engageds = v.filter(x => x.WEDDING_ID || false).map(x => {return x.WEDDING_ID});
        let engageds1 = v.filter(x => x.WEDDING_ID || false).map(x => {return x.WEDDING_ID});
        //let engagedLabel = v.filter(y => y.VENDOR_CATEGORY || false).map(y => {return y.VENDOR_CATEGORY});
        console.log(engageds)
        //console.log(engagedLabel)
        if(engageds.length > 0){
          this.barChartData[0].data = engageds;
          //this.barChartLabels = engagedLabel;
        }
        if(engageds1.length > 0 ){
          this.barChartData[1].data = engageds1;
        }
      }
    })
    this.callEngaged()
  }

  callEngaged(){
    this.engagedService.getEngaged().subscribe(obj => this.engagedBehavior.next(obj));
    //console.log(this.engaged.map(obj => { return obj.WEDDING_ID }))
  }

  public barChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'index',
      backgroundColor: '#ffffff',
      title: false,
      bodyFontColor: '#000000',
      position: 'nearest',
    }
  };
  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [],
      label: 'Assessoria de casamento',
      backgroundColor: '#3b69ff',
      hoverBorderColor: '#3b69ff',
      hoverBackgroundColor: '#3b69ff',
      borderColor: '#3b69ff'
    },
    {
      data: [],
      label: 'Espaco',
      backgroundColor: '#B36868',
      hoverBorderColor: '#B36868',
      hoverBackgroundColor: '#B36868',
      borderColor: '#B36868'
    },
  ];

}
