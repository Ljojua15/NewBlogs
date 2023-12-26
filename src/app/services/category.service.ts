import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public data$ = new BehaviorSubject<any>([]);

  constructor(private client: HttpClient) {}
  private api = 'https://api.blog.redberryinternship.ge';
  getData() {
    return this.client.get(`${this.api}/api/categories`);
  }
}
