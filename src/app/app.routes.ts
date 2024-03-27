import { Routes } from '@angular/router';
import { PacienteComponent } from './pages/paciente/paciente.component';

export const routes: Routes = [
  { path: 'pacientes', component: PacienteComponent },
  { path: '', component: PacienteComponent },
  { path: '**', component: PacienteComponent }
];
