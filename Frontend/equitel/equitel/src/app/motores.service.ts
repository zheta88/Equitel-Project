import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MotoresService {

  constructor(private http: HttpClient) { }

  getMotores():Observable<any>{
    return this.http.get("https://localhost:7258/api/motores");
  }
}
