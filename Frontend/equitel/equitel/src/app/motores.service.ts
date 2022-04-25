import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MotoresService {
  id: any;

  constructor(private http: HttpClient) { }
  private Url = 'https://localhost:7258/api/motores';  

  getMotores(): Observable<MotoresService[]> {
    return this.http.get<MotoresService[]>(this.Url)
      
  }

  getMotor(id: number): Observable<MotoresService> {
    const url = `${this.Url}/${id}`;
    return this.http.get<MotoresService>(url)
    
  }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


addMotor(motor: MotoresService): Observable<MotoresService> {
  return this.http.post<MotoresService>(this.Url, motor, this.httpOptions)
  
}

create(data: any): Observable<any> {
  return this.http.post(this.Url, data)
 
}

delete(id_motor: any): Observable<any> {
  return this.http.delete(`${this.Url}/${id_motor}`,this.httpOptions)
}



}