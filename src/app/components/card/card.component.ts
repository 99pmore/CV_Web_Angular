import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() school!: Card

  @Input() company!: Card

  @Input() certification!: Card

  public isPhone = false

  constructor(
    private responsive: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,      
      ])
      .subscribe(result => {
        this.isPhone = false

        if (result.matches) {
          this.isPhone = true
        }
    })
  }

}
