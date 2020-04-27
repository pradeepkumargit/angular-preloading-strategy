import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';
 
 
const routes: Routes = [
  {path: "admin", loadChildren:'./admin/admin.module#AdminModule',data: { preload: true, delay:5000 }},
  {path: "test", loadChildren:'./test/test.module#TestModule',data: { preload: true, delay:10000 }},
];
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }