import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  openUrl(proyecto : number){
    if (proyecto == 1){
      window.open('https://www.mythicrabbit.com', '_system');
    }
    if (proyecto == 2){
      window.open('https://github.com/romedgar/loteria', '_system');
    }
    if (proyecto == 2){
      window.open('https://github.com/romedgar/Codex', '_system');
    }
    if (proyecto == 4){
      window.open('https://github.com/UltraFIC/AppRestEducation', '_system');
    }
    if (proyecto == 5){
      window.open('https://github.com/romedgar/mapeo-empresas-edgar-rojas', '_system');
    }
    if (proyecto == 6){
      window.open('https://github.com/danycalderon16/PizzaManager', '_system');
    }
    if (proyecto == 7){
      window.open('https://github.com/ADVABENAVIDESIB/descubre-nayarit', '_system');
    }
    if (proyecto == 8){
      window.open('https://github.com/romedgar/AlbumFotograficoEGRM', '_system');
    }
  }

}

