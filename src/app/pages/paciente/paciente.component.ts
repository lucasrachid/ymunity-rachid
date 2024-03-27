import { Component, OnInit } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}
