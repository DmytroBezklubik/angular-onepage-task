import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { ItemSelectComponent } from './components/item-select/item-select.component';
import { IconTextComponent } from './components/icon-text/icon-text.component';
import { ProgressCardComponent } from './components/progress-card/progress-card.component';

@NgModule({
  declarations: [
    ItemSelectComponent,
    IconTextComponent,
    ProgressCardComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    // NgbModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ItemSelectComponent,
    IconTextComponent,
    ProgressCardComponent,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
