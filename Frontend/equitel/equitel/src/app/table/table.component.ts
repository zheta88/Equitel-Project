import { Component, OnInit } from '@angular/core';
import { MotoresService } from '../motores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  isMotorAdded = false;
  motores: any;
  page: any;
  showMotores: Array<any> = [];

  constructor(public MotoresService: MotoresService, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(){

    this.MotoresService.getMotores().subscribe(data=>{
      this.motores = data;
      this.page="";
    })
   
  }

  // deleteMotor(id_motor: any): void {
  //   if (confirm("está seguro de querer eliminar el registro " + id_motor + "?")){
  //      this.MotoresService.delete(id_motor).subscribe((res) => console.log(res));
  //   }
  //  }
  deleteMotor(id_motor: any){
    this.MotoresService.delete(id_motor)
    .subscribe(
      response => {
        this.MotoresService.getMotores();
      },
      error => {
        console.log(error);
      });
  }

 
  
}
