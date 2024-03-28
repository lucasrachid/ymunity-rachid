import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../../models/paciente/paciente';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly apiUrl = environment.api;

  constructor(
    private readonly http: HttpClient
  ) { }

  buscarPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/pacientes.json`);
  }
}
