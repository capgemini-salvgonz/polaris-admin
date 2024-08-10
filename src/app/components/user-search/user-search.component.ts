import { Component } from '@angular/core';

@Component({
  selector: 'user-search',
  template: `
    <h1 mat-dialog-title>Agregar Usuario</h1>
    <div mat-dialog-content>
      <p>Esta funcionalidad permite agregar un nuevo usuario al sistema.</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cerrar</button>
    </div>
  `
})
export class UserSearchComponent {}
