import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public color: string;

  public size: number = document.documentElement.clientWidth;
  public innersize: number = window.innerWidth;

    @HostListener('window:resize')
    onResize() {
      this.size = document.documentElement.clientWidth;
      this.innersize = window.innerWidth;
    }

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.currentColor.subscribe(color => this.color = color);
  }

}
