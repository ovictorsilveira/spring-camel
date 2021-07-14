import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorFieldMessangesComponent } from './components/error-field-messanges/error-field-messanges.component';
import { CpfPipe } from './pipes/cpf.pipe';




@NgModule({
  declarations: [
    ErrorFieldMessangesComponent,
    CpfPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    ErrorFieldMessangesComponent,

    CpfPipe
  ]
})
export class SharedModule { }
