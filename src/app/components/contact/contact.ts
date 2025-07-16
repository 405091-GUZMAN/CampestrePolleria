import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  enviado = false;

  onSubmit(event: SubmitEvent) {
    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      event.preventDefault();
      return;
    }

    this.enviado = true;

    setTimeout(() => {
      this.enviado = false;
    }, 5000);
  }
}


