import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';


@NgModule({
  exports: [
    CommonModule, 
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    SliderModule,
    DropdownModule,
    InputTextModule,
    ProgressSpinnerModule,
    ToastModule,
    RatingModule
  ]
})
export class SharedModule {}
