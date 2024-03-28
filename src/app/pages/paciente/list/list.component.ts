import { Component, OnInit, signal } from '@angular/core';
import { PacienteService } from '../../../services/paciente/paciente.service';
import { Paciente } from '../../../models/paciente/paciente';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { LoaderComponent } from '../../../components/loader/loader.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    TooltipModule,
    LoaderComponent,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    MenuModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  carregando = signal(false);
  pacientes = signal<Paciente[]>([]);
  filteredPacientes = signal<Paciente[]>([]);
  searchTerm = signal('');
  filters = signal([
    { name: 'Todos Pacientes', code: 'all' },
    { name: 'Pacientes Ativos', code: 'ativos' },
    { name: 'Pacientes Inativos', code: 'inativos' },
  ]);
  selectedFilter = signal(this.filters()[0]);
  items = signal([
    {
      label: 'Ativo',
      icon: '',
    },
    {
      label: 'Inativo',
      icon: ''
    }
  ]);
  atualizaStatusOption = signal(false);
  pacienteAtual = signal({} as Paciente);

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
        setTimeout(() => {
          this.pacientes.set(response);
          this.filteredPacientes.set(response);
          this.carregando.set(false);
        }, 1000);
      },
      error: (error: any) => {
        console.error(error);
        this.carregando.set(false);
      }

    });
  }

  filterList(): void {
    const pacientes = this.pacientes().filter(paciente => paciente !== undefined &&
      paciente.nome!.toLowerCase().includes(this.searchTerm().toLowerCase())
    );

    if (this.selectedFilter().code === 'all') {
      this.filteredPacientes.set(pacientes);
      return;
    }

    if (this.selectedFilter().code === 'ativos') {
      this.filteredPacientes.set(pacientes.filter(paciente => paciente.isAtivo));
      return;
    }

    this.filteredPacientes.set(pacientes.filter(paciente => !paciente.isAtivo));
  }

  alterarValorStatusOption(paciente: Paciente): void {
    this.pacienteAtual.set(paciente);
    this.atualizaStatusOption.set(!this.atualizaStatusOption())
  }

  resetPacienteAtual(): void {
    this.pacienteAtual.set({} as Paciente);
  }

}
