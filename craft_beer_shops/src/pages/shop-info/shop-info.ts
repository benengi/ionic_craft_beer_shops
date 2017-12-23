import { Shop } from './../../models/shop.model';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-shop-info',
  templateUrl: 'shop-info.html',
})
export class ShopInfoPage implements OnInit {
  shop: Shop;
  
  constructor(private viewController: ViewController,
              private navParams: NavParams) { }
    
    ngOnInit(): void {
      this.shop = this.navParams.get('shop');
    }

    onClose(): void {
      this.viewController.dismiss();
    }
}