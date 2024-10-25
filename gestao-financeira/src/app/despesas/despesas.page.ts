import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
})
export class DespesasPage {
  despesas: any[] = [];
  descricao: string = '';  // Declaração da variável descricao
  valor: number = 0;       // Declaração da variável valor

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
    this.descricao = '';  // Limpa o campo após adicionar a despesa
    this.valor = 0;       // Limpa o campo após adicionar a despesa
  }
}
