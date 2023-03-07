import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get(`${this.API_URL}/get-all-details`);
  }

  public batsmanList() {
    return this.httpClient.get(`${this.API_URL}/get-batsman`);
  }
  public bowlersList() {
    return this.httpClient.get(`${this.API_URL}/get-bowlers`);
  }
  public rightHandedList() {
    return this.httpClient.get(`${this.API_URL}/get-right-handed-list`);
  }
  public leftHandedList() {
    return this.httpClient.get(`${this.API_URL}/get-left-handed-list`);
  }
  public SpinList() {
    return this.httpClient.get(`${this.API_URL}/get-spin-list`);
  }
  public deleteApi(data) {
    return this.httpClient.delete(`${this.API_URL}/delete`, data);
  }
  public updateApi(data) {
    return this.httpClient.post(`${this.API_URL}/update`, data);
  }
  public registerApi(data) {
    return this.httpClient.post(`${this.API_URL}/add`, data);
  }
}
