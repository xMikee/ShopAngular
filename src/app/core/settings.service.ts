import {computed, Injectable, signal} from '@angular/core';

type Config = {
  title:string,
  color:string,
  enableshop:boolean
}

type valueOf<T> = T[keyof T];

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  config = signal<Config>({
    title: 'Angular Shop',
    color: '#FFFFFF',
    enableshop : true
  })
  title = computed( () => this.config().title)
  color = computed(() => this.config().color)
  isShopEnable = computed(() => this.config().enableshop)

  setConfig(propName:keyof Config,value:valueOf<Config>){
    this.config.update(
      cfg => ({ ...cfg,[propName]:value })
    )
  }

  /**
   * Rimossi perchè ho ottimizzato con un unica funzione TS in cui gli passo il nome della proprietà e il valore da modificare
  setTitle(title : string){
    this.config.update(
      cfg => ({ ...cfg,title })
    )
  }

  setColor(color:string){
    this.config.update(
      cfg => ({ ...cfg,color})
    )
  }

  setEnableShop(enableshop: boolean){
    this.config.update(
      cfg => ({...cfg,enableshop})
    )
  }

   */

}
