import { Component } from '@angular/core';
import { header } from "./components/header/header.component";
import { sidebar } from "./components/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [header, sidebar, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Gerenciador de Contatos';
}
