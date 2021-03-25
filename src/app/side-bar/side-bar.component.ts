import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter();

  productURL = "http://localhost:5000/";
  categoryURL = "http://localhost:5000/categories";
  productList: any;
  categoryList: any;
  imgList: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>(this.categoryURL).subscribe(data => {
      this.categoryList = data;     
    })

  }

  clicked(i) {
    
    this.http.get<any>(this.productURL).subscribe(data => {
      this.productList = data;

      const result = this.productList.filter( p =>
        p.category_id == i.id );
      
      this.event.emit(result)
      
    })    

  }
}
