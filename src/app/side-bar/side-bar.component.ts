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
  productList: any;
  list: any;

  aList: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }




  sendFruit() {
    this.http.get<any>(this.url).subscribe(data => {
      this.productList = data;


      const result = this.productList.filter(p => p.category_id == 1);
      
      this.list = []

      for (let i = 0; i < result.length; i++) {

        this.list += result[i].product_name;
      }


        console.log(this.list);


      this.event.emit(this.list)




    })
  }


}
