import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MafinestComponent } from './mafinest.component';

const routes: Routes = [
  {
    path: '',
    component: MafinestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManifestRoutingModule { }
