import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Aplicação Calculadora';

  resultadoPai: number;

  processarResultado(resultado: number) {
    this.resultadoPai = resultado;
  }

}
