export class DeficitFoncierDTO {

  revenusLoyer : number;
  interetEmprunt : number;
  chargesNonFinanciere : number;
  deficit : number;
  economyImpots : number;
  effortEpargne : number;
  gainImpots : Map<number, number>;
  listEffortEpargne : Map<number, number>;
}
