import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardModule, GridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal';
}
