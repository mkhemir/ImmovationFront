import { Component, OnInit, HostListener, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {ListProduitImmobilierService} from './list-produit-immobilier.service';
import {Search} from '../models/Search';
import {ProduitImmobilierDTO} from '../models/produit-immobilier-dto';
import { CommonService } from '../common.service';
import { MapsAPILoader, AgmMap, LatLngBounds } from '@agm/core';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-list-produit-immobilier',
  templateUrl: './list-produit-immobilier.component.html',
  styleUrls: ['./list-produit-immobilier.component.scss']
})
export class ListProduitImmobilierComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public annonces: ProduitImmobilierDTO[] = [];
  private search: Search = null;

  public viewMap = false;
  public nbrProduitPerPage = 10;
  public cardWidth = 0;
  public cardHeight = 0;
  public cardDimensionInitialized = false;
  public insertIndex = 0;
  public showProduitImmobilier = true;

  public mapMDTop = 0;
  public mapLGTop = 0;
  public mapXLTop = 0;

  public mainLatitude = 0;
  public mainLongitude = 0;
  public bounds: any;

  public mapXSHeight = 0;
  public mapSMHeight = 0;


  public markers = [
    {
      latitude: 48.793210,
      longitude: 2.369160,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.839170,
      longitude: 2.522530,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.839170,
      longitude: 2.522530,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.861410,
      longitude: 2.378050,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.874690,
      longitude: 2.338990,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.852615,
      longitude: 2.36235,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.89079,
      longitude: 2.35987,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.86974,
      longitude: 2.35057,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.86203,
      longitude: 2.36589,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    },
    {
      latitude: 48.85776,
      longitude: 2.3476,
      markerIcon: '../../assets/images/spotlight-poi2-red.png',
      markerAnimation: null
    }
  ];

  @ViewChild('gm', {static: false}) agmMap: AgmMap;
  public innersize: number = window.innerWidth;

  computeInsertIndexAndReload() {
    for (let i = 0; i < this.nbrProduitPerPage; i++) {
      let eTop = 0;
      if ((this.innersize < 576)) {
        eTop = $('div#card' + i + 'IdXS').offset().top;
      } else {
        eTop = $('div#card' + i + 'IdSM').offset().top;
      }
      const positionFromTop = eTop - $(window).scrollTop();
      if ((positionFromTop > 0 || (positionFromTop + this.cardHeight) > 0) && this.insertIndex !== i) {
          this.insertIndex = i;
          break;
      } else if (positionFromTop > 0 || (positionFromTop + this.cardHeight) > 0) {
          break;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('onResize triggered');
    this.innersize = window.innerWidth;
    // tslint:disable-next-line: max-line-length
    if (this.innersize === 575 || this.innersize === 576 ||  this.innersize === 767 || this.innersize === 768 || this.innersize === 991 || this.innersize === 992 || this.innersize === 1199 || this.innersize === 1200) {
      this.setBounds();
    }
    if (this.innersize === 575 || this.innersize === 576) {
      if (this.viewMap && $('div#card0IdXS').width() !== undefined && $('div#card0IdXS').height() !== undefined) {
        this.cardWidth = $('div#card0IdXS').width();
        this.cardHeight = $('div#card0IdXS').height();
        this.cdRef.detectChanges();
      }
    }
    if (this.innersize === 767 || this.innersize === 768) {
      if (this.viewMap && $('div#card0IdSM').width() !== undefined && $('div#card0IdSM').height() !== undefined) {
        this.cardWidth = $('div#card0IdSM').width();
        this.cardHeight = $('div#card0IdSM').height();
        this.cdRef.detectChanges();
        this.cardDimensionInitialized = true;
      }
     }
    if (this.innersize >= 768 && this.innersize < 992) {
      this.mapMDTop = $(window).scrollTop();
      this.cdRef.detectChanges();
    } else if (this.innersize >= 992 && this.innersize < 1200) {
      this.mapLGTop = $(window).scrollTop();
      this.cdRef.detectChanges();
    }  else if (this.innersize >= 1200) {
      this.mapXLTop = $(window).scrollTop();
      this.cdRef.detectChanges();
    }
    if (this.innersize < 768) {
      if (this.innersize < 576) {
        this.cardWidth = $('#card0IdXS').width();
        this.cardHeight = $('#card0IdXS').height();
      } else {
        this.cardWidth = $('#card0IdSM').width();
        this.cardHeight = $('#card0IdSM').height();
      }
    }
    if (this.innersize === 767 || this.innersize === 768) {
      this.computeInsertIndexAndReload();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.innersize = window.innerWidth;
    if (this.innersize >= 768 && this.innersize < 992) {
      this.mapMDTop = $(window).scrollTop();
      this.cdRef.detectChanges();
    } else if (this.innersize >= 992 && this.innersize < 1200) {
      this.mapLGTop = $(window).scrollTop();
      this.cdRef.detectChanges();
    }  else if (this.innersize >= 1200) {
      this.mapXLTop = $(window).scrollTop();
      this.cdRef.detectChanges();
    }
    let preAboveLimit = 0;
    let aboveLimit = 0;
    if (this.innersize < 768 && this.viewMap) {
      if (this.innersize < 576) {
        if (this.insertIndex > 0) {
          preAboveLimit = $('div#prePreviousMapIdXS + div').offset().top - $(window).scrollTop() + this.cardHeight;
        }
        aboveLimit = $('div#previousMapIdXS + div').offset().top - $(window).scrollTop() + this.cardHeight;
      } else {
        if (this.insertIndex > 0) {
          preAboveLimit = $('div#prePreviousMapIdSM + div').offset().top - $(window).scrollTop() + this.cardHeight;
        }
        aboveLimit = $('div#previousMapIdSM + div').offset().top - $(window).scrollTop() + this.cardHeight;
      }
      if ((this.insertIndex > 0 && preAboveLimit > 0) || aboveLimit < 0) {
        this.computeInsertIndexAndReload();
      }
    }
  }

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private listProduitImmobilierService: ListProduitImmobilierService, private commonService: CommonService, private cdRef:ChangeDetectorRef, public mapsAPILoader:MapsAPILoader) { }

  ngOnInit() {
    this.search = this.commonService.search;
    this.commonService.search = undefined;
    this.listProduitImmobilierService.getListProduitImmobilierDTO(this.search).subscribe( result => this.annonces = result);
    let latitudeResult = 0;
    let longitudeResult = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.markers.length; i++) {
      latitudeResult += this.markers[i].latitude;
      longitudeResult += this.markers[i].longitude;
    }
    this.mainLatitude = latitudeResult / 10;
    this.mainLongitude = longitudeResult / 10;
    this.setBounds();
    //
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    if (this.innersize < 576) {
      if (this.viewMap && $('div#card0IdXS').width() !== undefined && $('div#card0IdXS').height() !== undefined) {
        this.cardWidth = $('div#card0IdXS').width();
        this.cardHeight = $('div#card0IdXS').height();
        this.cdRef.detectChanges();
      }
    }
    if (this.innersize >= 576 || this.innersize < 768) {
      if (this.viewMap && $('div#card0IdSM').width() !== undefined && $('div#card0IdSM').height() !== undefined) {
        this.cardWidth = $('div#card0IdSM').width();
        this.cardHeight = $('div#card0IdSM').height();
        this.cdRef.detectChanges();
        this.cardDimensionInitialized = true;
      }
     }
     this.mapXSHeight = this.computeMapXSHeight();
     this.mapSMHeight = this.computeMapSMHeight();

    this.cdRef.detectChanges();
  }

  mouseEnterProduitImmobilier(index: number) {
    this.markers[index].markerIcon = '../../assets/images/spotlight-poi2-green.png';
    this.markers[index].markerAnimation = 'BOUNCE';
  }

   mouseLeaveProduitImmobilier(index: number) {
    this.markers[index].markerIcon = '../../assets/images/spotlight-poi2-red.png';
    this.markers[index].markerAnimation = null;
  }



  computeMapXLHeight() {
    const height = $('#listXLMap').width();
    return height;
  }

  computeMapLGHeight() {
    const height = $('#listLGMap').width();
    return height;
  }

  computeMapMDHeight() {
    const height = $('#listMDMap').width();
    return height;
  }

  computeMapSMHeight() {
    const height = $('#card0IdSM').height();
    return height;
  }

  computeMapXSHeight() {
    const height = $('#card0IdXS').height();
    return height;
  }

  setBounds() {
    if (this.viewMap && this.agmMap) {
      this.agmMap.mapReady.subscribe((map: { fitBounds: (arg0: LatLngBounds) => void; }) => {
        const bounds: LatLngBounds = new google.maps.LatLngBounds();
        let minLongitude = 0;
        let minLatitude = 0;
        let maxLongitude = 0;
        let maxLatitude = 0;
        for (const mm of this.markers) {
          if (mm.latitude < minLatitude) {
            minLatitude = mm.latitude;
          }
          if (mm.latitude > maxLatitude) {
            maxLatitude = mm.latitude;
          }
          if (mm.longitude < minLongitude) {
            minLongitude = mm.longitude;
          }
          if (mm.longitude > maxLongitude) {
            maxLongitude = mm.longitude;
          }
        }
        bounds.extend(new google.maps.LatLng(minLatitude, minLongitude));
        bounds.extend(new google.maps.LatLng(maxLatitude, maxLongitude));
        console.log('ca passe map.fitBounds');
        map.fitBounds(bounds);
      });
    }
  }

  displayMap() {
    this.viewMap = !this.viewMap;
    if (this.viewMap) {
      this.setBounds();
    }
  }

  clickedMarker(infoWindow: { close: () => void; open: () => void; }, gm: { lastOpen: { close: () => void; }; }) {
      if (gm.lastOpen != null) {
          gm.lastOpen.close();
      }
      gm.lastOpen = infoWindow;
      infoWindow.close();
      infoWindow.open();
  }

  fitMapBounds(event: any) {
    const bounds: LatLngBounds = new google.maps.LatLngBounds();
    let minLongitude = 0;
    let minLatitude = 0;
    let maxLongitude = 0;
    let maxLatitude = 0;
    for (const mm of this.markers) {
      if (mm.latitude < minLatitude) {
        minLatitude = mm.latitude;
      }
      if (mm.latitude > maxLatitude) {
        maxLatitude = mm.latitude;
      }
      if (mm.longitude < minLongitude) {
        minLongitude = mm.longitude;
      }
      if (mm.longitude > maxLongitude) {
        maxLongitude = mm.longitude;
      }
    }
    bounds.extend(new google.maps.LatLng(minLatitude, minLongitude));
    bounds.extend(new google.maps.LatLng(maxLatitude, maxLongitude));
    event.fitBounds(bounds);
  }

  getDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
