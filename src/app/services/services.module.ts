import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[TodosService]
})
export class ServicesModule { }
