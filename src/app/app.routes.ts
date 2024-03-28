import { Routes } from '@angular/router';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { SolicitacoesComponent } from './pages/solicitacoes/solicitacoes.component';
import { AtendimentosComponent } from './pages/atendimentos/atendimentos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'solicitacoes', component: SolicitacoesComponent },
  { path: 'atendimentos', component: AtendimentosComponent },
  { path: 'dashboards', component: DashboardComponent },
  { path: 'pacientes', component: PacienteComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
