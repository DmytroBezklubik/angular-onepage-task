import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './modules/index.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/index.module').then(mod => mod.IndexModule)
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
