import { Component } from '@angular/core';
    
class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    template:
    `<div id="all">
        <div class="colored">
            <h1> ПЕЧЕНЬКА </h1>
        </div>
        <div class="form-inline" id=con>
            <div na-appclass="col-md-offset-2 col-md-8" id=div1>
                <img class="img-responsive" [src] = "!isOpen? 'assets/img/closecookie.png' : nameImg" alt="альтернативный текст" (click)="addItem()">
                <button class="btn btn-default" (click)="addItemNew(text, price)">ЕЩЁ ПРЕДСКАЗАНИЕ</button>
            </div>
        </div>
    </div>`,
    styleUrls: ['style.css']
})


// <div class="col-md-offset-2 col-md-8">
// <img class="img-responsive" id="btn" src = 'assets/img/but.png' >
// </div>


export class AppComponent { 
    text: string = "";
    price: number = 0;
    ImagePath: string;

    isOpen = false;

    nameImg: string = 'assets/img/opencookie.png'
    constructor() {
        //  document.body.style.background = "url(bg.jpg);";
        document.body.style.background = "linear-gradient(#FFFFFF, #FCA737)";
      }

    names: string[] = 
    [
        "assets/img/1.png",
        "assets/img/2.png",
        "assets/img/3.png",
        "assets/img/4.png",
        "assets/img/5.png",
        "assets/img/6.png",
        "assets/img/7.png",
        "assets/img/8.png",
        "assets/img/9.png",
        "assets/img/10.png",
        "assets/img/11.png",
        "assets/img/12.png",
        "assets/img/13.png",
        "assets/img/14.png",
        "assets/img/15.png",
        "assets/img/16.png",
        "assets/img/17.png",
        "assets/img/18.png",
        "assets/img/19.png",
        "assets/img/20.png",
    ];

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    addItem(): void {
        if (!this.isOpen )
        {
            this.isOpen = true
            this.nameImg = this.names[this.getRandomInt(this.names.length)]
        }
    }
    addItemNew(text: string, price: number): void {
        this.isOpen = false
    }
}