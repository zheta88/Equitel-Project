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
  currentMotor: any;
  message = '';

  constructor(public MotoresService: MotoresService, private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(){

    this.MotoresService.getMotores().subscribe(data=>{
      this.motores = data;
      this.page="";
    })
   
  }

  deleteMotor(id_motor: any){
    if(confirm("Está seguro de eliminar el "+id_motor +" registro? "))
    this.MotoresService.delete(id_motor)
    .subscribe(
      response => {
        this.MotoresService.getMotores();
      },
      error => {
        console.log(error);
      });
  }

  updateMotor(): void {
    this.MotoresService.update(this.currentMotor.id_motor, this.currentMotor)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Motor actualizado correctamente!';
        },
        error => {
          console.log(error);
        });
  }

 
  
}
