import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FornecedoresComponent } from './pages/dashboard/fornecedores/fornecedores.component';
import { FinanceiroComponent } from './pages/dashboard/financeiro/financeiro.component'
import { NoivosComponent } from './pages/dashboard/noivos/noivos.component'

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FornecedoresComponent,
    FinanceiroComponent,
    NoivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
