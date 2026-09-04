import { Routes } from '@angular/router';
import path from 'node:path';

export const routes: Routes = [
  {   path: '', redirectTo: 'sobre', pathMatch: 'full'},
  {
    path: 'sobre',
    loadComponent: () => import('./features/sobre/sobre').then((m) => m.Sobre )
  },

  {
    path: 'objetivo-profissional',
   loadComponent: () => import('./features/objetivo-profissional/objetivo-profissional').then((m) => m.ObjetivoProfissional)
  },

  {
    path: 'certificacoes',
    loadComponent: () => import('./features/certificacoes/certificacoes').then((m) => m.Certificacoes)
  },
  {
    path: 'habilidades',
    loadComponent: () => import('./features/habilidades/habilidades').then((m) => m.Habilidades)
  },

  {
    path: 'projetos',
    loadComponent: () => import('./features/projetos/projetos').then((m) => m.Projetos)
  },
];
