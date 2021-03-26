import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  productArray: any
  name: any;
  product: any;
  open: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.productArray = [
      { name: "Kuru Soğan", price: 3.99, sale: "%15", img: "https://market.eticaret.webdeneme.com/siteler/market/image/cache/catalog/sogan-kuru-kg-250x250.jpg" },
      { name: "Kıyma", price: 50, sale: "%12", img: "https://market.eticaret.webdeneme.com/siteler/market/image/cache/catalog/kiyma-250x250.jpg" },
      { name: "Sek Günlüt Süt Cam Şişe 1 lt", price: 11, sale: "%10", img: "https://market.eticaret.webdeneme.com/siteler/market/image/cache/catalog/sek-gunlut-sut-cam-sise-1-lt-250x250.jpg" },
    ]

  }

  showClick() {
    this.open = !this.open;
    console.log(this.open);
  }

  fruitFromChild(data) {

    this.name = data
    console.log("sds" + data);
  }


}



