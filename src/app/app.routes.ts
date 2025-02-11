import { Routes } from '@angular/router';
import { ProductListContainerComponent } from './containers/product-list-container/product-list-container.component';

export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'product', component: ProductListContainerComponent },
];
