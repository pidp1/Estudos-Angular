import { Component, Input, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';


@Component({
  selector: 'credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  /**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */
  @Input()
  dadosCartao: CartaoDeCredito ={
    ano:'40',
    mes: '06',
    cvv: '123',
    nome: 'lindinha docinho',
    numero: '1235 4562 4856 4514'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
