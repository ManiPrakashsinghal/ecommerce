import { Component } from '@angular/core';
import { FilterState, Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { SharedModule } from '../../shared.modules';
import { FilterPanelComponent } from '../../components/filter-panel/filter-panel.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-list-container',
  standalone: true,
  imports: [SharedModule, FilterPanelComponent, ProductDetailsComponent, ProductListComponent],
  templateUrl: './product-list-container.component.html',
  styleUrl: './product-list-container.component.scss'
})
export class ProductListContainerComponent {
 products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  loading = false;
  error = '';
  selectedProduct: Product | null = null;
  detailsVisible = false;
  currentFilters: FilterState = {
    category: '',
    priceRange: [0, 2000],
    rating: 0,
    sortField: 'price',
    sortOrder: 'asc'
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.productService.getCategories().subscribe({
      next: (categories:any) => this.categories = categories.map((c:any) => ({
        label: c.name, 
        value: c.slug 
      })),
      error: (error) => this.error = error.message
    });
  }

  loadProducts() {
    this.loading = true;
    this.productService.getProducts(this.products.length).subscribe({
      next: (response) => {
        this.products = [...this.products, ...response.products];
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      }
    });
  }

  loadMoreProducts() {
    if (!this.loading) {
      this.loadProducts();
    }
  }

  onFilterChange(filters: FilterState) {
    this.currentFilters = filters;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.products];

    if (this.currentFilters.category) {
      filtered = filtered.filter(p => p.category === this.currentFilters.category);
    }

    filtered = filtered.filter(p => 
      p.price >= this.currentFilters.priceRange[0] && 
      p.price <= this.currentFilters.priceRange[1]
    );

    if (this.currentFilters.rating) {
      filtered = filtered.filter(p => p.rating >= this.currentFilters.rating);
    }

    filtered.sort((a:any, b:any) => {
      const factor = this.currentFilters.sortOrder === 'asc' ? 1 : -1;
      return (a[this.currentFilters.sortField] - b[this.currentFilters.sortField]) * factor;
    });

    this.filteredProducts = filtered;
  }

  onProductSelect(product: Product) {
    this.selectedProduct = product;
    this.detailsVisible = true;
  }

  closeDetails() {
    this.detailsVisible = false;
    this.selectedProduct = null;
  }
}
