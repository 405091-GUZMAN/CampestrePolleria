import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  onSubmit() {
    alert('Gracias por tu consulta! Nos comunicaremos pronto.');
    // Aquí podés agregar lógica para enviar datos a backend o mailer
  }
}
