import { Component, OnInit } from '@angular/core';
import { TurmasService } from "./turmas.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // <Variaveis>
  turmas: any;
  turma = null;
  aluno = null;

  frequencia = null;
  nota1 = null;
  nota2 = null;

  registros = [];
  // </Variaveis>
  constructor(private service: TurmasService) {}

  ngOnInit(): void {
    this.service.lista()
      .subscribe((dados: any) => this.turmas = dados);
  }
  


  salvar(form: any) {
    this.registros.push({turma: this.turma, aluno: this.aluno, frequencia: this.frequencia, nota1: this.nota1, nota2: this.nota2});
    form.reset();
  }
  encontrarTurma(numero: any) {
    if (numero != null) {
      for (const i of this.turmas) {
        if (i.numero === numero) {
          return i.alunos;
        }
      }
  }
  }
  encontrarAluno(codigo: any) {
    console.log(codigo);
    if (codigo != null) {
      for (const i of this.turmas) {
        if (i.codigo === codigo) {
          return i.alunos;
        }
      }
  }
  }
}
