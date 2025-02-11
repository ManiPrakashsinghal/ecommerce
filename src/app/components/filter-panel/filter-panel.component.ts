import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterState } from '../../models/product';
import { SharedModule } from '../../shared.modules';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss'
})
export class FilterPanelComponent {
  @Input() categories: string[] = [];
  @Output() filterChange = new EventEmitter<FilterState>();

  constructor(){
    console.log(this.categories);
  }

  filters: FilterState = {
    category: '',
    priceRange: [0, 2000],
    rating: 0,
    sortField: 'price',
    sortOrder: 'asc'
  };

  sortOptions = [
    { label: 'Price: Low to High', value: { field: 'price', order: 'asc' } },
    { label: 'Price: High to Low', value: { field: 'price', order: 'desc' } },
    { label: 'Rating: High to Low', value: { field: 'rating', order: 'desc' } }
  ];

  emitFilters() {
    this.filterChange.emit(this.filters);
  }

  resetFilters() {
    this.filters = {
      category: '',
      priceRange: [0, 2000],
      rating: 0,
      sortField: 'price',
      sortOrder: 'asc'
    };
    this.emitFilters();
  }


}
