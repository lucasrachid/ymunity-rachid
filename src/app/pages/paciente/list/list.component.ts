import { Component, OnInit, signal } from '@angular/core';
import { PacienteService } from '../../../services/paciente/paciente.service';
import { Paciente } from '../../../models/paciente/paciente';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  carregando = signal(false);
  pacientes = signal<Paciente[]>([]);

  constructor(
    private readonly pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.buscarPacientes();
  }

  buscarPacientes(): void {
    this.carregando.set(true);
    this.pacienteService.buscarPacientes().subscribe({
      next: (response: Paciente[]) => {
        this.pacientes.set(response);
        this.carregando.set(false);
      },
      error: (error: any) => {
        console.error(error);
        this.carregando.set(false);
      }

    });
  }
}
