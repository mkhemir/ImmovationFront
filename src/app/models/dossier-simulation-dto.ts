import {ProduitImmobilierDTO} from "./produit-immobilier-dto";
import {ResultatLmnpDto} from "./resultat-lmnp-dto";
import {ResultatMhDTO} from "./resultat-mh-dto";
import {ResultatMalrauxDTO} from "./resultat-malraux-dto";
import {ResultatBouvardDTO} from "./resultat-bouvard-dto";
import {DeficitFoncierDTO} from "./deficit-foncier-dto";
import {ResultatLoiPinelDTO} from "./resultat-loiPinel-dto";

export class DossierSimulationDTO {

  public produitImmobilierDTO: ProduitImmobilierDTO;

  public resultatLoiPinel6DTO: ResultatLoiPinelDTO;

  public resultatLoiPinel9DTO: ResultatLoiPinelDTO;

  public resultatLoiPinel12DTO: ResultatLoiPinelDTO;

  public resultatLmnpReelDto: ResultatLmnpDto;

  public resultatLmnpMicroDto: ResultatLmnpDto;

  public resultatMhDto: ResultatMhDTO;

  public resultatMalrauxDTO: ResultatMalrauxDTO;

  public resultatBouvardDTO: ResultatBouvardDTO;

  public deficitFoncierDTO: DeficitFoncierDTO;
}
