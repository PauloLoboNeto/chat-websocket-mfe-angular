import { Component } from '@angular/core';
import { HeaderComponent } from "../pages/header/header.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe1Angular';
  private changeDetectionCount = 0;

  constructor(private router: Router) {

  }
  ngDoCheck(): void {
    this.changeDetectionCount++;
    console.log(`Detecção de mudanças: ${this.changeDetectionCount}`);
  }

  ngOnInit() {
    this.router.navigate(['list-message']);
  }
}
