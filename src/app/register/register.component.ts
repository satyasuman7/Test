import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  City: any = ['Pune', 'Bangalore', 'Bhubneswar', 'Kolkata','Bhopal'];
  Courses:any = ['B.E.', 'B.Tech', 'B.A.', 'MBA', 'M.Tech'];
  PassYear:any = ['2019', '2020', '2021', '2022', '2023'];
}
