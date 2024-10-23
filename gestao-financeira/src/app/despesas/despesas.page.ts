import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage {
  despesas: any[] = [];

  constructor(private storage: Storage) {
    this.loadDespesas();
  }

  async loadDespesas() {
    const despesasSalvas = await this.storage.get('despesas');
    this.despesas = despesasSalvas || [];
  }

  async addDespesa(despesa: any) {
    this.despesas.push(despesa);
    await this.storage.set('despesas', this.despesas);
  }
}
