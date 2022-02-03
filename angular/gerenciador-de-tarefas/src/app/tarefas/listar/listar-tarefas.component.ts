import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTarefas();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa ?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTarefas();
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    if(confirm('Deseja alterar o status ?')) {
      this.tarefaService.atualizarPorStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
