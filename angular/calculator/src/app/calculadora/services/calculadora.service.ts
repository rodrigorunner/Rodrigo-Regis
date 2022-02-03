/**
 * Serviço responsável pelas operações matemáticas
 * 
 * @author Rodrigo Regis<rodrigoregisrun@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Constantes reponsáveis pelas operações
     aritméticas */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Função responsável por calcular, e aceita
   * soma, subtração, divisão e multiplicação
   * 
   * @return number
   */
  calcular(numb1: number, numb2: number, operacao: string): number {
      let resultado: number; // armazena o valor da operação

      switch(operacao) {
        case CalculadoraService.SOMA:
          resultado = numb1 + numb2;
        break;

        case CalculadoraService.SUBTRACAO:
          resultado = numb1 - numb2;
        break;

        case CalculadoraService.DIVISAO:
          resultado = numb1 / numb2;
        break;

        case CalculadoraService.MULTIPLICACAO:
          resultado = numb1 * numb2;
        break;
        default:
          resultado = 0;
      }
      return resultado
  }
}
