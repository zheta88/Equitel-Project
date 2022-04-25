import { Component, OnInit } from '@angular/core';
import { MotoresService } from '../motores.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  motores: any;
  page: any;
  showMotores: Array<any> = [];

  constructor(public MotoresService: MotoresService) { }

  ngOnInit(){

    this.MotoresService.getMotores().subscribe(data=>{
      this.motores = data;
      this.page="";
    })
  }

}
