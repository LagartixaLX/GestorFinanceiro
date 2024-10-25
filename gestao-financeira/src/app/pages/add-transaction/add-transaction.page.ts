import { Component } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
})
export class AddTransactionPage {
  valor: number = 0;
  descricao: string = '';
  tipo: string = '';
  categoriaId: number = 0;

  constructor(private dbService: DatabaseService) {}

  async addTransaction()
   {
    await this.dbService.db!.run(`INSERT INTO transacoes (valor, descricao, tipo, categoria_id, data)
      VALUES (?, ?, ?, ?, ?)`, [this.valor, this.descricao, this.tipo, this.categoriaId, new Date().toISOString()]);
    // Lógica para redirecionar ou exibir mensagem de sucesso
  }
}

