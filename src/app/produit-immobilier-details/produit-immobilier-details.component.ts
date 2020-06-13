import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DossierSimulationDTO} from "../models/dossier-simulation-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {ListProduitImmobilierService} from "../list-produit-immobilier/list-produit-immobilier.service";
import {ProduitImmobilierDetailsService} from "./produit-innobilier-details.service";
import {ProduitCardPinelComponent} from "./produit-card/produit-card-pinel/produit-card-pinel.component";
import {ResultatLoiPinelDTO} from "../models/resultat-loiPinel-dto";
import {ResultatLmnpDto} from "../models/resultat-lmnp-dto";
import {ProduitCardLmnpComponent} from "./produit-card/produit-card-lmnp/produit-card-lmnp.component";
import {ResultatBouvardDTO} from "../models/resultat-bouvard-dto";
import {ProduitCardBouvardComponent} from "./produit-card/produit-card-bouvard/produit-card-bouvard.component";
import {ResultatMhDTO} from "../models/resultat-mh-dto";
import {ResultatMalrauxDTO} from "../models/resultat-malraux-dto";
import {DeficitFoncierDTO} from "../models/deficit-foncier-dto";
import {ProduitCardDfComponent} from "./produit-card/produit-card-df/produit-card-df.component";
import {ProduitCardMalrauxComponent} from "./produit-card/produit-card-malraux/produit-card-malraux.component";
import {ProduitCardMhComponent} from "./produit-card/produit-card-mh/produit-card-mh.component";

declare var $: any;

@Component({
  selector: 'app-produit-immobilier-details',
  templateUrl: './produit-immobilier-details.component.html',
  styleUrls: ['./produit-immobilier-details.component.scss']
})

export class ProduitImmobilierDetailsComponent implements OnInit {

  public tabNumber = 2;
  dossier : DossierSimulationDTO = new DossierSimulationDTO();
  dossier2 : DossierSimulationDTO = new DossierSimulationDTO();
  id : number;
  componentRef1: any;
  componentRef2: any;
  componentRef3: any;
  componentRef4: any;
  componentRef5: any;
  componentRef6: any;
  componentRef7: any;
  componentRef8: any;
  componentRef9: any;
  mapSimulation: any;

  @ViewChild('option1', {static: false, read: ViewContainerRef }) entry1: ViewContainerRef;
  @ViewChild('option2', {static: false, read: ViewContainerRef }) entry2: ViewContainerRef;
  @ViewChild('option3', {static: false, read: ViewContainerRef }) entry3: ViewContainerRef;
  @ViewChild('option4', {static: false, read: ViewContainerRef }) entry4: ViewContainerRef;
  @ViewChild('option5', {static: false, read: ViewContainerRef }) entry5: ViewContainerRef;
  @ViewChild('option6', {static: false, read: ViewContainerRef }) entry6: ViewContainerRef;
  @ViewChild('option7', {static: false, read: ViewContainerRef }) entry7: ViewContainerRef;
  @ViewChild('option8', {static: false, read: ViewContainerRef }) entry8: ViewContainerRef;
  @ViewChild('option9', {static: false, read: ViewContainerRef }) entry9: ViewContainerRef;
  constructor(private changeDetector: ChangeDetectorRef, private resolver: ComponentFactoryResolver, private router: Router, private route: ActivatedRoute, private produitImmobilierDetailsService: ProduitImmobilierDetailsService) {
  }

  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
  slides: any = [[]];

  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
    this.id = this.route.snapshot.params['id'];
    $('.responsive-navigation ul').hide();
    this.mapSimulation = new Map();
    this.produitImmobilierDetailsService.getDetailsProduit(this.id).subscribe( result => {
      console.info(result.resultatLoiPinel6DTO.economyImpots);
      this.dossier2 = result;
      this.dossier.resultatLoiPinel6DTO = result.resultatLoiPinel6DTO;
      this.dossier.resultatLoiPinel9DTO = result.resultatLoiPinel9DTO;
      this.dossier.resultatLoiPinel12DTO = result.resultatLoiPinel12DTO;
      this.dossier.resultatLmnpReelDto = result.resultatLmnpReelDto;
      this.dossier.resultatLmnpMicroDto = result.resultatLmnpMicroDto;
      this.dossier.resultatMhDto = result.resultatMhDto;
      this.dossier.resultatBouvardDTO = result.resultatBouvardDTO;
      this.dossier.resultatMalrauxDTO = result.resultatMalrauxDTO;
      this.dossier.deficitFoncierDTO = result.deficitFoncierDTO;
      this.mapSimulation.set('PINEL6', this.dossier.resultatLoiPinel6DTO);
      this.mapSimulation.set('PINEL9', this.dossier.resultatLoiPinel9DTO);
      this.mapSimulation.set('PINEL12', this.dossier.resultatLoiPinel12DTO);
      this.mapSimulation.set('LMNP_REEL', this.dossier.resultatLmnpReelDto);
      this.mapSimulation.set('LMNP_MICRO', this.dossier.resultatLmnpReelDto);
      this.mapSimulation.set('BOUVARD', this.dossier.resultatBouvardDTO);
      this.mapSimulation.set('MALRAUX', this.dossier.resultatMalrauxDTO);
      this.mapSimulation.set('DEFICIT_FONCIER', this.dossier.deficitFoncierDTO);
      this.mapSimulation.set('MH', this.dossier.resultatMhDto);
      this.mapSimulation = new Map([...this.mapSimulation.entries()].sort((a, b) => (a[1].effortEpargne > b[1].effortEpargne) ? -1 : 1));
      this.createComponent();
    });



  }

  applyClickCss(event: { target: any; }) {
    $('#menuHorizon1').removeClass('expanded');
    $('#menuHorizon2').removeClass('expanded');
    $('#menuHorizon3').removeClass('expanded');
    $('#menuHorizon4').removeClass('expanded');
    $('#menuHorizon5').removeClass('expanded');
    $('#menuHorizon6').removeClass('expanded');

    $('#menuVertical1').removeClass('expanded');
    $('#menuVertical2').removeClass('expanded');
    $('#menuVertical3').removeClass('expanded');
    $('#menuVertical4').removeClass('expanded');
    $('#menuVertical5').removeClass('expanded');
    $('#menuVertical6').removeClass('expanded');

    const target = $(event.target);
    if (target.attr('id').includes('1')) {
      this.tabNumber = 1;
       $('#menuHorizon1').toggleClass('expanded');
       $('#menuVertical1').toggleClass('expanded');
      // setTimeout(() => { this.displayMap(); }, 1000);
    }
    if (target.attr('id').includes('2')) {
      this.tabNumber = 2;
       $('#menuHorizon2').toggleClass('expanded');
       $('#menuVertical2').toggleClass('expanded');
      //this.changeDetector.detectChanges();
      //this.createComponent();
    }
    if (target.attr('id').includes('3')) {
      this.tabNumber = 3;
       $('#menuHorizon3').toggleClass('expanded');
       $('#menuVertical3').toggleClass('expanded');
    }
    if (target.attr('id').includes('4')) {
      this.tabNumber = 4;
       $('#menuHorizon4').toggleClass('expanded');
       $('#menuVertical4').toggleClass('expanded');
    }
    if (target.attr('id').includes('5')) {
      this.tabNumber = 5;
       $('#menuHorizon5').toggleClass('expanded');
       $('#menuVertical5').toggleClass('expanded');
    }
    if (target.attr('id').includes('6')) {
      this.tabNumber = 6;
       $('#menuHorizon6').toggleClass('expanded');
       $('#menuVertical6').toggleClass('expanded');
    }
    //target.toggleClass('expanded');
    $('.responsive-navigation ul').hide();
  }

  toggleMenu() {
    console.log('ca passe exterieur');
    $('.responsive-navigation ul').toggle(console.log('ca passe'));
  }

  createComponent() {
    this.entry1.clear();
    this.entry2.clear();
    this.entry3.clear();
    this.entry4.clear();
    this.entry5.clear();
    this.entry6.clear();
    this.entry7.clear();
    this.entry8.clear();
    this.entry9.clear();
    const array = Array.from(this.mapSimulation.keys());
    const factory1 = this.resolver.resolveComponentFactory(this.getComponentType(array[0] + ''));
    this.componentRef1 = this.entry1.createComponent(factory1);
    this.fillComponent(array[0] + '', this.componentRef1.instance, 1);

    const factory2 = this.resolver.resolveComponentFactory(this.getComponentType(array[1] + ''));
    this.componentRef2 = this.entry2.createComponent(factory2);
    this.fillComponent(array[1] + '', this.componentRef2.instance, 2);

    const factory3 = this.resolver.resolveComponentFactory(this.getComponentType(array[2] + ''));
    this.componentRef3 = this.entry3.createComponent(factory3);
    this.fillComponent(array[2] + '', this.componentRef3.instance, 3);

    const factory4 = this.resolver.resolveComponentFactory(this.getComponentType(array[3] + ''));
    this.componentRef4 = this.entry4.createComponent(factory4);
    this.fillComponent(array[3] + '', this.componentRef4.instance, 4);

    const factory5 = this.resolver.resolveComponentFactory(this.getComponentType(array[4] + ''));
    this.componentRef5 = this.entry5.createComponent(factory5);
    this.fillComponent(array[4] + '', this.componentRef5.instance, 5);

    const factory6 = this.resolver.resolveComponentFactory(this.getComponentType(array[5] + ''));
    this.componentRef6 = this.entry6.createComponent(factory6);
    this.fillComponent(array[5] + '', this.componentRef6.instance, 6);

     const factory7 = this.resolver.resolveComponentFactory(this.getComponentType(array[6] + ''));
    this.componentRef7= this.entry7.createComponent(factory7);
    this.fillComponent(array[6] + '', this.componentRef7.instance, 7);

    const factory8 = this.resolver.resolveComponentFactory(this.getComponentType(array[7] + ''));
    this.componentRef8 = this.entry8.createComponent(factory8);
    this.fillComponent(array[7] + '', this.componentRef8.instance, 8);

    const factory9 = this.resolver.resolveComponentFactory(this.getComponentType(array[8] + ''));
    this.componentRef9 = this.entry9.createComponent(factory9);
    this.fillComponent(array[8] + '', this.componentRef9.instance, 9);
  }

  getComponentType(type: string): any {
    if (type === 'PINEL6') {
      return ProduitCardPinelComponent;
    }
    if (type === 'PINEL9') {
      return ProduitCardPinelComponent;
    }
    if (type === 'PINEL12') {
      return ProduitCardPinelComponent;
    }
    if (type === 'LMNP_REEL') {
      return ProduitCardLmnpComponent;
    }
    if (type === 'LMNP_MICRO') {
      return ProduitCardLmnpComponent;
    }
    if (type === 'BOUVARD') {
      return ProduitCardBouvardComponent;
    }
    if (type === 'MH') {
      return ProduitCardMhComponent;
    }
    if (type === 'MALRAUX') {
      return ProduitCardMalrauxComponent;
    }
    if (type === 'DEFICIT_FONCIER') {
      return ProduitCardDfComponent;
    }
  }


  fillComponent(type: string, componentRef: any, rang : number) {
    if (type === 'PINEL6') {
      this.fillComponentPinel(componentRef , this.dossier.resultatLoiPinel6DTO, 'Pinel de 6 ans', rang);
      return;
    }
    if (type === 'PINEL9') {
      this.fillComponentPinel(componentRef , this.dossier.resultatLoiPinel9DTO, 'Pinel de 9 ans', rang);
      return;
    }
    if (type === 'PINEL12') {
      this.fillComponentPinel(componentRef , this.dossier.resultatLoiPinel12DTO, 'Pinel de 12 ans', rang);
      return;
    }
    if (type === 'LMNP_REEL') {
      this.fillComponentLmnp(componentRef , this.dossier.resultatLmnpReelDto, 'LMNP Reel', rang);
      return;
    }
    if (type === 'LMNP_MICRO') {
      this.fillComponentLmnp(componentRef , this.dossier.resultatLmnpMicroDto, 'LMNP Micro', rang);
      return;
    }
    if (type === 'BOUVARD') {
      this.fillComponentBouvard(componentRef , this.dossier.resultatBouvardDTO, rang);
      return;
    }
    if (type === 'MH') {
      this.fillComponentMH(componentRef , this.dossier.resultatMhDto, rang);
      return;
    }
    if (type === 'MALRAUX') {
      this.fillComponentMalraux(componentRef , this.dossier.resultatMalrauxDTO, rang);
      return;
    }
    if (type === 'DEFICIT_FONCIER') {
      this.fillComponentDF(componentRef , this.dossier.deficitFoncierDTO, rang);
      return;
    }
  }

  fillComponentPinel(componentRef: any, resultatLoiPinelDTO: ResultatLoiPinelDTO , pinelType : string, rang : number) {
    componentRef.pinel = resultatLoiPinelDTO;
    componentRef.cardTitle = pinelType;
    componentRef.rang = rang;
  }

  fillComponentLmnp(componentRef: any, resultatLmnpDto: ResultatLmnpDto , lmnpType : string, rang : number) {
    componentRef.lmnp = resultatLmnpDto;
    componentRef.cardTitle = lmnpType;
    componentRef.rang = rang;
  }

  fillComponentBouvard(componentRef: any, resultatBouvardDTO: ResultatBouvardDTO, rang : number) {
    componentRef.bouvard = resultatBouvardDTO;
    componentRef.cardTitle = 'Bouvard';
    componentRef.rang = rang;
  }

  fillComponentMH(componentRef: any, resultatMhDTO: ResultatMhDTO, rang : number) {
    componentRef.mh = resultatMhDTO;
    componentRef.cardTitle = 'Monument Historique';
    componentRef.rang = rang;
  }

  fillComponentMalraux(componentRef: any, resultatMalrauxDTODTO: ResultatMalrauxDTO, rang : number) {
    componentRef.malraux = resultatMalrauxDTODTO;
    componentRef.cardTitle = 'Malraux';
    componentRef.rang = rang;
  }

  fillComponentDF(componentRef: any, deficitFoncierDTO: DeficitFoncierDTO, rang : number) {
    componentRef.deficit = deficitFoncierDTO;
    componentRef.cardTitle = 'Déficit Foncier';
    componentRef.rang = rang;
  }


  destroyComponent() {
    this.componentRef1.destroy();
  }
}
