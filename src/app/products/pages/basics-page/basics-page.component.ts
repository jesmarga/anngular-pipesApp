import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'esteban';
  public nameUpper: string = 'ESTEBAN';
  public fullName: string = 'EsTeBaN'

  public customDate = new Date();
}
