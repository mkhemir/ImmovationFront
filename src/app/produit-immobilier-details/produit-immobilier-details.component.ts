import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-produit-immobilier-details',
  templateUrl: './produit-immobilier-details.component.html',
  styleUrls: ['./produit-immobilier-details.component.scss']
})

export class ProduitImmobilierDetailsComponent implements OnInit {

  public tabNumber = 2;

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
    $('.responsive-navigation ul').hide();
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
}
