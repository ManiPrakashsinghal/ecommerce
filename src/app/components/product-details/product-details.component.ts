import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { SharedModule } from '../../shared.modules';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null;
  @Input() visible = false;
  @Output() hide = new EventEmitter<void>();
}
