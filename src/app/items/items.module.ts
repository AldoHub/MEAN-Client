import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';


@NgModule({
  imports: [
    ItemsRoutingModule,
   CommonModule
  ],
  declarations: [ItemsComponent]
})
export class ItemsModule { }
