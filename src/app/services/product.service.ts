import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'https://dummyjson.com/products';
  
  constructor(private http: HttpClient) {}

  getProducts(skip: number = 0, limit: number = 20): Observable<{products: Product[], total: number}> {
    return this.http.get<any>(`${this.API_URL}?skip=${skip}&limit=${limit}`).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(() => new Error('Failed to load products. Please try again later.'));
      })
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/categories`);
  }
}
