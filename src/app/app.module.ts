import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TotalComponent } from './summary/total/total.component';
import { MenuComponent } from './blocks/menu/menu.component';
import { ErrorComponent } from './blocks/error/error.component';
import { CategoryComponent } from './management/category/category.component';


const appRoutes: Routes = [
    {
      path: 'summary-total',
      component: TotalComponent,
      data: { title: 'Heroes List' }
    },
    {
      path: 'management-category',
      component: CategoryComponent,
      data: { title: 'Heroes List' }
    },
  // { path: '',
  //   redirectTo: '/summary-total',
  //   pathMatch: 'full'
  // },
  { path: '**', component: ErrorComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    MenuComponent,
    ErrorComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
