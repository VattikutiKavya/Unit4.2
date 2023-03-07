import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css'],
})
export class GetDetailsComponent implements OnInit {
  data: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.dataService.sendGetRequest().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getBatsmanList() {
    this.dataService.batsmanList().subscribe((response: any) => {
      this.data = response?.response;
      console.log('getBatsmanList', this.data);
    });
  }
  getBowlersList() {
    this.dataService.bowlersList().subscribe((response: any) => {
      this.data = response?.response;
      console.log('getBowlersList', this.data);
    });
  }
  getRightHandedList() {
    this.dataService.rightHandedList().subscribe((response: any) => {
      this.data = response?.response;
      console.log('getRightHandedList', this.data);
    });
  }
  getLeftHandedList() {
    this.dataService.leftHandedList().subscribe((response: any) => {
      this.data = response?.response;
      console.log('getLeftHandedList', this.data);
    });
  }
  getSpinList() {
    this.dataService.SpinList().subscribe((response: any) => {
      this.data = response?.response;
      console.log('getSpinList', this.data);
    });
  }
  getDelete(deleteData) {
    this.dataService
      .deleteApi({ id: deleteData })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('getDelete', this.data);
      });
  }
  onOptionsSelected(value: string) {
    if (value === 'role-batsman') {
      this.getBatsmanList();
    } else if (value === 'role-bowler') {
      this.getBowlersList();
    } else if (value === 'style-right-handed') {
      this.getRightHandedList();
    } else if (value === 'style-left-handed') {
      this.getLeftHandedList();
    } else if (value === 'style-spin') {
      this.getSpinList();
    } else {
      this.getAllData();
    }
  }
  deleteUser(id: string) {
    this.getDelete(id);
  }
}
