import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';

@Component({
  selector: 'page-menu-test',
  templateUrl: 'menu-test.html'
})
export class MenuTestPage {
  logradouro: string ='';
  bairro: string;
  cidade: string;
  uf: string;
  qrCEP: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService: ConnectionService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTestPage');
  }

  buscarCep() : void{
    console.log('CEP DIGITADO: '+this.qrCEP);
    this.connectionService.getCep(this.qrCEP)
      .then((res) => {
        //console.log(res);
        let json = res.json();
        console.log(json);
        this.logradouro = json.logradouro;
        this.bairro = json.bairro;
        this.cidade = json.localidade;
        this.uf = json.uf;
    });
  }

}
