import { Component, OnInit, signal } from '@angular/core';
import { PacienteService } from '../../../services/paciente/paciente.service';
import { Paciente } from '../../../models/paciente/paciente';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  carregando = signal(false);
  pacientes = signal<Paciente[]>([]);
  customers = [
    {
      "name": "Lucas Rachid Martins",
      "country": {
        "name": "France"
      },
      "company": "Cormoran",
      "representative": {
        "name": "Sara Goodwin"
      }
    }
  ];

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
        console.log(this.pacientes());
        this.carregando.set(false);
      },
      error: (error: any) => {
        console.error(error);
        this.carregando.set(false);
      }

    });
  }
}
