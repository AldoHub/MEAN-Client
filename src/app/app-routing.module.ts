import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  { path: '', loadChildren: './items/items.module#ItemsModule' },
  { path: 'additem', loadChildren: './add-item/add-item.module#AddItemModule' },
  { path: 'item/:id', loadChildren: './item/item.module#ItemModule' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
