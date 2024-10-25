import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  sqliteConnection: SQLiteConnection;
  db: SQLiteDBConnection | null = null;

  constructor() {
    this.sqliteConnection = new SQLiteConnection(CapacitorSQLite);
  }

  async initDB() {
    this.db = await this.sqliteConnection.createConnection("financeDB" , false, "no-encryption", 1,false );
    await this.db.open();
    await this.db.execute(`
      CREATE TABLE IF NOT EXISTS categorias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS transacoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        valor REAL,
        descricao TEXT,
        data TEXT,
        tipo TEXT,
        categoria_id INTEGER,
        FOREIGN KEY (categoria_id) REFERENCES categorias (id)
      );
    `);
  }
}
