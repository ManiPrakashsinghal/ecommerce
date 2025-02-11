import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterState, Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { SharedModule } from '../../shared.modules';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() loading = false;
  @Input() error = '';
  @Output() loadMore = new EventEmitter<void>();
  @Output() productSelect = new EventEmitter<Product>();
}
