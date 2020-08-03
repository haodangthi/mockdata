import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import { EntityDataModule } from '@ngrx/data';
import {entityConfig} from './store/entity-metadata'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    EntityDataModule,

    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    EntityDataModule.forRoot(entityConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
