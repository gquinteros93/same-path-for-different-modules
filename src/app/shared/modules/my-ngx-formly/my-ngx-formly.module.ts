import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { configNgxFormly } from './my-ngx-formly.config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(configNgxFormly),
    FormlyMaterialModule
  ],
  exports: [
    FormlyModule,
    FormlyMaterialModule
  ]
})
export class MyNgxFormlyModule { }
