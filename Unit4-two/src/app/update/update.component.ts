import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  data: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = window.history.state;
  }
  onSubmit(name) {
    console.log('name', name);
  }
  updatePlayer(name, role, batting_style, bowling_style) {
    this.dataService
      .updateApi({
        name: name,
        role: role,
        battingStyle: batting_style,
        bowlingStyle: bowling_style,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('updatePlayer', this.data);
      });
  }
  Update(
    name: string,
    role: string,
    batting_style: string,
    bowling_style: string
  ) {
    this.updatePlayer(name, role, batting_style, bowling_style);
  }
}
