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

  selectTurma = null;
  registros = [ ];
  // </Variaveis>
  constructor(private service: TurmasService) {}

  ngOnInit(): void {
    this.service.lista().subscribe((dados: any) => this.turmas = dados);
  }

  getTurma(numero: any) {
    this.selectTurma = this.turmas.filter((dados: any) => numero === dados.numero)[0].alunos;
  }


  salvar(form: any) {
    this.registros.push({numeroTurma: this.turma, codigoAluno: this.aluno,
       frequencia: this.frequencia, nota1: this.nota1, nota2: this.nota2});
    console.log(this.registros);
    form.reset();
  }

  encontrarTurma(numero: any) {
    const info = this.turmas.filter((dados: any) => numero === dados.numero)[0];
    return info.numero + ' - ' + info.nome;
  }
  encontrarAluno(codigo: any, numero: any) {
    const tur =  this.turmas.filter((dados: any) => numero === dados.numero)[0];
    const aluno = tur.alunos.filter((dados: any) => codigo === dados.codigo)[0];
    return aluno.codigo + ' - ' + aluno.nome;
  }
  calcularMedia(nota1: any, nota2: any) {
    return (nota1 + nota2) / 2;
  }

  calcularFrequenciaMedia() {
    let soma = 0;
    for (const i of this.registros) {
      soma += i.frequencia;
    }
    return soma / this.registros.length;
  }
  calcularNota1Media() {
    let soma = 0;
    for (const i of this.registros) {
      soma += i.nota1;
    }
    return soma / this.registros.length;
  }
  calcularNota2Media() {
    let soma = 0;
    for (const i of this.registros) {
      soma += i.nota2;
    }
    return soma / this.registros.length;
  }



}
