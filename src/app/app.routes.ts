import { Routes } from '@angular/router';
import { findComponent } from './contacts/pages/find.component';
import { registerComponent } from './contacts/pages/register.component';

export const routes: Routes = [
  {
    path: "buscar",
    component: findComponent
  },
  {
    path: "cadastrar",
    component: registerComponent
  }
];
