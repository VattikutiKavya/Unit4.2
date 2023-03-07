import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  data: any = [];
  constructor(private route: Router, private dataService: DataService) {}

  ngOnInit(): void {}

  go() {
    this.route.navigate(['/register']);
  }
  registerPlayer(name, role, batting_style, bowling_style) {
    this.dataService
      .registerApi({
        name: name,
        role: role,
        battingStyle: batting_style,
        bowlingStyle: bowling_style,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('registerPlayer', this.data);
      });
  }
  Register(
    name: string,
    role: string,
    batting_style: string,
    bowling_style: string
  ) {
    this.registerPlayer(name, role, batting_style, bowling_style);
  }
}
