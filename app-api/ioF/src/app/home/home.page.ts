import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data1: any;
  data2: any;
  data3: any;
  data4: any;

  articulos: Article[] = [];

  constructor(public api: RestApiService, public loadingController: LoadingController) {}

  ngOnInit() {
    this.api.getData()
    .subscribe(noticias => {
      console.log('Datos:', noticias);
      
      //console.log('Datos:', noticias.id);
      console.log('--------------------------');
      this.articulos.push(...noticias.articles);
      
    });
  }

  async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.api.getData()
      .subscribe(res => {
        console.log(res);
        this.data1 = res[0];
        this.data2 = res[1];
        this.data3 = res[2];
        this.data4 = res[3];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
