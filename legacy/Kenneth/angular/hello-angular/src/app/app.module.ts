import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallyComponent } from "./sally/sally.component";

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'sally', component: SallyComponent },
  { path: '',
   pathMatch: 'full',
   component: AppComponent
 },
];

@NgModule({
  declarations: [
    AppComponent,
    SallyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
