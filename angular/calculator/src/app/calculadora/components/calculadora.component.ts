import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Reinicia todos os operadores para o valor padrão
   * 
   * @return void
   */
  limpar() {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  /**
   * Adiciona o número selecionado
   * 
   * @param numero string
   * @return void
   */
  adicionaNumero(numero: string): void {
    if(this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero)
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Função responsável por concatenar número
   *  
   * @param numConcat string
   * @param numAtual string
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha '0' ou null reinicia o valor
    if(numAtual === '0' || numAtual === null) {
      numAtual = ''
    }

    // caso não tenha um ponto, adicione um
    if(numConcat === '.' && numAtual === '') {
      return '0.'
    } 

    // caso '.' digitado e já contem um, não retorne nada
    if(numConcat === '.' && numAtual.indexOf('.') > -1 ) {
      return numAtual;
    }
    return numAtual + numConcat;
  }

  /**
   * Executa lógica quando um operador for selecionado.
   * Caso já possua uma operação selecionada, excuta a 
   * operação anterior, e define a nova operação.
   * 
   * @param string operacao
   * @return void
   */
  definirOperacao(operacao: string): void {
    // apenas define a operação caso não exista uma
    if(this.operacao === null) {
      this.operacao = operacao
      return;
    }

    /* Caso tenha definida e número 2 selecionado,
       efetua o cálculo da operação */
   if(this.numero2 !== null) {
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    )
    this.operacao = operacao;
    this.numero1 = this.resultado.toString();
    this.numero2 = null;
    this.resultado = null;
   }
  }

  /**
   * Efetuar cálculo de uma operação
   * 
   * @return void
   */
  calcular():void {
    if(this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    )
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora
   * 
   * @return string
   */
  get display(): string {
    if(this.resultado !== null) {
      return this.resultado.toString();
    }

    if(this.numero2 !== null) {
      return this.numero2;
    }

    return this.numero1;
  }
}
