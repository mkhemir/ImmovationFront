import {ProduitImmobilierDTO} from "./produit-immobilier-dto";
import {ResultatLmnpDto} from "./resultat-lmnp-dto";
import {ResultatMhDTO} from "./resultat-mh-dto";
import {ResultatMalrauxDTO} from "./resultat-malraux-dto";
import {ResultatBouvardDTO} from "./resultat-bouvard-dto";
import {DeficitFoncierDTO} from "./deficit-foncier-dto";
import {ResultatLoiPinelDTO} from "./resultat-loiPinel-dto";

export class DossierSimulationDTO {

    produitImmobilierDTO : ProduitImmobilierDTO;

    resultatLoiPinel6DTO : ResultatLoiPinelDTO;

  resultatLoiPinel9DTO : ResultatLoiPinelDTO;

  resultatLoiPinel12DTO : ResultatLoiPinelDTO;

  resultatLmnpReelDto : ResultatLmnpDto;

  resultatLmnpMicroDto : ResultatLmnpDto;

  resultatMhDto : ResultatMhDTO;

  resultatMalrauxDTO : ResultatMalrauxDTO;

  resultatBouvardDTO : ResultatBouvardDTO;

  deficitFoncierDTO : DeficitFoncierDTO;
}
