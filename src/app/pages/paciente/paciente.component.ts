import { Component, OnInit, signal } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [
    ListComponent,
    ButtonModule,
    DialogModule,
    CadastroComponent
  ],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent {
  visible = signal(false);

  showModal(): void {
    this.visible.set(!this.visible());
  }

}
