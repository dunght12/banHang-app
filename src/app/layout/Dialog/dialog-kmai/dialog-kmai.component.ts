import { Component, Input, OnInit } from '@angular/core';
// import { INPUTNUMBER_VALUE_ACCESSOR } from 'primeng/inputnumber';

@Component({
  selector: 'app-dialog-kmai',
  templateUrl: './dialog-kmai.component.html',
  styleUrls: ['./dialog-kmai.component.css']
})
export class DialogKMaiComponent implements OnInit {
  @Input() displayDialogKMai :boolean = false;
  show6 !: boolean;
  constructor() { }


  ngOnInit(): void {
  }

  showDialogCfKMai(){
    this.show6 = true;
  }
}
