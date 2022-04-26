import { Component, Inject, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotoresService } from '../motores.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  motor = {
    descripcion_motor: '',
    potencia: '',
    valor_importacion:''

  };
  isMotorAdded = false;
  motores: any;
  currentMotor: any;
  constructor(public MotoresService: MotoresService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.cargar();

  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id_motor =e['id_motor'];
        if(id_motor){
          this.MotoresService.getMotor(id_motor).subscribe(

            data=>this.motores=data
          )
        }
      }
    );
  }

  
  addMotor(): void {
    const data = {
      descripcion_motor: this.motor.descripcion_motor,
      potencia: this.motor.potencia,
      valor_importacion: this.motor.valor_importacion
    };
    if (!data.descripcion_motor) {
      alert('Por favor agrega datos para el motor!');
      return;
    }

    this.MotoresService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isMotorAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  newMotor(): void {
    this.isMotorAdded = false;
    this.motor = {
      descripcion_motor: '',
      potencia: '',
      valor_importacion: ''
    };
  }

  save(): void {
    this.MotoresService.getMotor(this.motores)
      .subscribe(() => this.goBack());
  }


  goBack(): void {
    throw new Error('Method not implemented.');
  }
  

}
