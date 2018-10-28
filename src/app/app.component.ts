import { Component } from '@angular/core';
import { environment } from '@env/environment.prod';

console.log(environment);
// import 'normalize.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mindsumo-clone';
}
