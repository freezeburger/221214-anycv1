import { Component, Input, OnInit, DoCheck, OnDestroy, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss']
})
export class LayoutDefaultComponent implements OnInit, DoCheck, OnDestroy {

  static lectureDisclaimerSown = false;

  public get lectureDisclaimer (){ return LayoutDefaultComponent.lectureDisclaimerSown }
  public set lectureDisclaimer ( value:boolean ){ LayoutDefaultComponent.lectureDisclaimerSown = true }

  @Input() title = 'Atlas Application';
  public lectureMode  = false;

  // 1 LifeCycle : Creation
  constructor(private tabTitleService: Title) { 
    // console.log(Math.random())
    // window.addEventListener('keydown', this.toggleLectureMode )
  }

  // 2 LifeCycle : Initialisation (DOM)
  ngOnInit(): void {
    this.tabTitleService.setTitle(this.title);
  }

  // 3 LifeCycle : Check Evolution (DOM)
  ngDoCheck(): void {
  }

  // 4 LifeCycle : Removal (DOM)
  ngOnDestroy(): void {
  }

  @HostListener('window:keydown.control.alt.t')
  toggleLectureMode = () =>{
    this.lectureMode = !this.lectureMode;
    console.log( 'toggleLectureMode', this.lectureMode)
  }

}
