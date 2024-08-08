import { AuthGuard } from './components/auth.guard/auth.guard'
import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'padmin',
    component: WelcomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'administracion/usuarios', loadComponent: () => import('./feature/administracion/usuarios/usuarios.component').then(m => m.UsuariosComponent), canActivate: [AuthGuard] },
      { path: 'administracion/profesionales-salud', loadComponent: () => import('./feature/administracion/profesionales-salud/profesionales-salud.component').then(m => m.ProfesionalesSaludComponent), canActivate: [AuthGuard] },
      { path: 'administracion/asistentes', loadComponent: () => import('./feature/administracion/asistentes/asistentes.component').then(m => m.AsistentesComponent), canActivate: [AuthGuard] },
      { path: 'finanzas/facturacion', loadComponent: () => import('./feature/finanzas/facturacion/facturacion.component').then(m => m.FacturacionComponent), canActivate: [AuthGuard] },
      { path: 'finanzas/pagos', loadComponent: () => import('./feature/finanzas/pagos/pagos.component').then(m => m.PagosComponent), canActivate: [AuthGuard] },
      { path: 'finanzas/reportes-facturacion', loadComponent: () => import('./feature/finanzas/reportes-facturacion/reportes-facturacion.component').then(m => m.ReportesFacturacionComponent), canActivate: [AuthGuard] },
      { path: 'finanzas/reportes-pagos', loadComponent: () => import('./feature/finanzas/reportes-pagos/reportes-pagos.component').then(m => m.ReportesPagosComponent), canActivate: [AuthGuard] },
      { path: 'soporte/issues', loadComponent: () => import('./feature/soporte/issues/issues.component').then(m => m.IssuesComponent), canActivate: [AuthGuard] },
      { path: 'soporte/logs', loadComponent: () => import('./feature/soporte/logs/logs.component').then(m => m.LogsComponent), canActivate: [AuthGuard] },
      { path: 'cmdb/componentes', loadComponent: () => import('./feature/cmdb/componentes/componentes.component').then(m => m.ComponentesComponent), canActivate: [AuthGuard] },
      { path: 'cmdb/historial-cambios', loadComponent: () => import('./feature/cmdb/historial-cambios/historial-cambios.component').then(m => m.HistorialCambiosComponent), canActivate: [AuthGuard] },
      { path: 'cmdb/incidentes', loadComponent: () => import('./feature/cmdb/incidentes/incidentes.component').then(m => m.IncidentesComponent), canActivate: [AuthGuard] },
    ]
  },
  { path: '**', redirectTo: '' }
];
