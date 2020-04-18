import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public color: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.currentColor.subscribe(color => this.color = color);
  }

}
