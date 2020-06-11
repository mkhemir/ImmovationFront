export class DeficitFoncierDTO {

  public revenusLoyer : number;
  public interetEmprunt : number;
  public chargesNonFinanciere : number;
  public deficit : number;
  public economyImpots : number;
  public effortEpargne : number;
  public gainImpots : Map<number, number>;
  public listEffortEpargne : Map<number, number>;
  public mensualiteCredit :number;
}
