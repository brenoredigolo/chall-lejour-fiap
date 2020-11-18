import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinanceiroComponent } from './pages/dashboard/financeiro/financeiro.component';
import { FornecedoresComponent } from './pages/dashboard/fornecedores/fornecedores.component';
import { NoivosComponent } from './pages/dashboard/noivos/noivos.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,},
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'fornecedores', component: FornecedoresComponent,},
    { path: 'financeiro', component: FinanceiroComponent,},
    { path: 'noivos', component: NoivosComponent,},
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
