import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { ProduitImmobilierDTO } from '../produit-immobilier-dto';
import { Search } from '../search';
import { Router } from '@angular/router';

//declare var $:JQueryStatic;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  public investmentFormGroup: FormGroup;

  public searchFormGroup: FormGroup;

  // tslint:disable-next-line: max-line-length
  public annonce: ProduitImmobilierDTO = new ProduitImmobilierDTO(0, 'Flat', '0622136822', 'Pug flexitarian viral cliche pour-over. Banjo tote bag vinyl, lumbersexual 8-bit fam +1 chicharrones disrupt artisan vice activated charcoal offal succulents. Cornhole lyft williamsburg waistcoat put a bird on it banjo sriracha iceland snackwave keffiyeh kinfolk. Bespoke drinking vinegar mixtape hexagon DIY viral kitsch ramps poutine four dollar toast food truck ethical venmo keffiyeh.', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'S', 'A', 1, 1, 2, 1, 1, 1, 1, 1, 1, '10', 1, 1, '18th district', '75018', 'Paris', 'A', 690000, 190, 1, 1, 1, 1, 1, 1, 1, 'V', 1);

  public color = 'white';

  // @HostListener('window:resize', ['$event'])
  //   onResize() {
  //     let homePageImage5With = $('#homePageImage5').width();
  //     let newTop = 184 - (184 - homePageImage5With * (184/649));
  //     let innersize = window.innerWidth;
  //     if (innersize >= 480 && innersize <= 690) {
  //       console.log('newTop='+newTop);
  //       $("#homePageCard1").css({ top: newTop + 'px' });
  //     }
  //   }

  constructor(private formBuilder: FormBuilder, private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.investmentFormGroup = this.formBuilder.group({
        liveRentChoice: ['LiveIn', Validators.required],
        monthlyNetIncome: ['', Validators.required],
        creditInProgress: ['', Validators.required],
        byWho: ['', Validators.required],
        estimatedMonthlyPayment: ['', Validators.required],
        creditDuration: ['', Validators.required]
    });
    this.searchFormGroup = this.formBuilder.group({
        ville: ['', Validators.required],
        prixMax: ['', Validators.required]
    });
    this.commonService.currentColor.subscribe(color => this.color = color);
    this.newColor('white');
  }

  search() {
    const search = new Search();
    search.ville = this.searchFormGroup.get('ville').value === null ? '' : this.searchFormGroup.get('ville').value;
    // tslint:disable-next-line: max-line-length
    search.prixMax = (this.searchFormGroup.get('prixMax').value === null || this.searchFormGroup.get('prixMax').value === '') ? 0 : this.searchFormGroup.get('prixMax').value;
    this.commonService.search = search;
    this.router.navigate(['/listProduitImmobilier']);
  }

  ngAfterViewInit() {
    const allRanges = document.querySelectorAll('.range-wrap');
    allRanges.forEach(wrap => {
      const range = wrap.querySelector('.range');
      const bubble = wrap.querySelector('.bubble');
      const that = this;
      range.addEventListener('input', () => {
        that.setBubble(range, bubble);
      });
      that.setBubble(range, bubble);
    });
  }

  setBubble(range, bubble): void {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }


  newColor(color: string) {
    this.commonService.changeColor(color);
  }

}
