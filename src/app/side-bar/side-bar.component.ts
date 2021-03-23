import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter();

  url = "http://localhost:3000/";
  categoryURL = "http://localhost:3000/categories";
  productList: any;
  categoryList: any;


  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>(this.categoryURL).subscribe(data => {
      this.categoryList = data;

      console.log(data);

    })
  }

  clicked() {
    
    this.http.get<any>(this.url).subscribe(data => {
      this.productList = data;

      const result = this.productList.filter( p => {
        p.category_id == this.categoryList;
      
      })
      console.log(result);
      
      this.event.emit(result)
    })

  }

  // sendFruit() {
  //   this.http.get<any>(this.url).subscribe(data => {
  //     this.productList = data;

  //     const result = this.productList.filter(p => p.category_id == 1);
  //     this.event.emit(result)

  //   })
  // }

  // sendMeat() {
  //   this.http.get<any>(this.url).subscribe(data => {
  //     this.productList = data;

  //     const result = this.productList.filter(p => p.category_id == 2)
  //     this.event.emit(result)
  //   })
  // }


}
