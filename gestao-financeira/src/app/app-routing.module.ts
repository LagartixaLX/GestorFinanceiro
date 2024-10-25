import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'despesas',
    loadChildren: () => import('./despesas/despesas.module').then( m => m.DespesasPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'add-transaction',
    loadChildren: () => import('./pages/add-transaction/add-transaction.module').then( m => m.AddTransactionPageModule)
  },
  {
    path: 'transaction-list',
    loadChildren: () => import('./pages/transaction-list/transaction-list.module').then( m => m.TransactionListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
