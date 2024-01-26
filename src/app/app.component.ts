import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public data = this.category.data$.asObservable();
  constructor(private category: CategoryService) {
    this.category.getData().subscribe((res: any) => {
      this.category.data$.next(res.data);
      console.log(res.data[2].id);
    });
  }
}
