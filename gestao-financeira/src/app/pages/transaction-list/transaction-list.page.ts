import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.page.html',
  styleUrls: ['./transaction-list.page.scss'],
})
export class TransactionListPage implements OnInit {
  transactions: any[] | undefined;

  constructor(private dbService: DatabaseService) {}

  async ngOnInit() {
    await this.loadTransactions();
  }

  async loadTransactions() {
    const result = await this.dbService.db!.query(`SELECT * FROM transacoes ORDER BY data DESC`);
    this.transactions = result.values;
  }
}
