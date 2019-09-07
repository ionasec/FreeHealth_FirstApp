import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getHospitals() {
    return this.http.get(`${this.uri}/hospitals`);
  }
}
