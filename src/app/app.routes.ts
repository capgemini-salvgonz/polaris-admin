import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'padmin',
    component: WelcomeComponent,
    children: [
      { path: 'administracion/usuarios', loadComponent: () => import('./feature/administracion/usuarios/usuarios.component').then(m => m.UsuariosComponent) },
      { path: 'administracion/profesionales-salud', loadComponent: () => import('./feature/administracion/profesionales-salud/profesionales-salud.component').then(m => m.ProfesionalesSaludComponent) },
      { path: 'administracion/asistentes', loadComponent: () => import('./feature/administracion/asistentes/asistentes.component').then(m => m.AsistentesComponent) },
      { path: 'finanzas/facturacion', loadComponent: () => import('./feature/finanzas/facturacion/facturacion.component').then(m => m.FacturacionComponent) },
      { path: 'finanzas/pagos', loadComponent: () => import('./feature/finanzas/pagos/pagos.component').then(m => m.PagosComponent) },
      { path: 'finanzas/reportes-facturacion', loadComponent: () => import('./feature/finanzas/reportes-facturacion/reportes-facturacion.component').then(m => m.ReportesFacturacionComponent) },
      { path: 'finanzas/reportes-pagos', loadComponent: () => import('./feature/finanzas/reportes-pagos/reportes-pagos.component').then(m => m.ReportesPagosComponent) },
      { path: 'soporte/issues', loadComponent: () => import('./feature/soporte/issues/issues.component').then(m => m.IssuesComponent) },
      { path: 'soporte/logs', loadComponent: () => import('./feature/soporte/logs/logs.component').then(m => m.LogsComponent) },
      { path: 'cmdb/componentes', loadComponent: () => import('./feature/cmdb/componentes/componentes.component').then(m => m.ComponentesComponent) },
      { path: 'cmdb/historial-cambios', loadComponent: () => import('./feature/cmdb/historial-cambios/historial-cambios.component').then(m => m.HistorialCambiosComponent) },
      { path: 'cmdb/incidentes', loadComponent: () => import('./feature/cmdb/incidentes/incidentes.component').then(m => m.IncidentesComponent) },
    ]
  },
  { path: '**', redirectTo: '' }
];
