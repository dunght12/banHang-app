import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-cf-kmai',
  templateUrl: './dialog-cf-kmai.component.html',
  styleUrls: ['./dialog-cf-kmai.component.css']
})
export class DialogCfKMaiComponent implements OnInit {
  show6 !: boolean;

  @Input() displayDialogCfKMai : boolean = false;
  constructor() { }

  showDialogCfKMai(){
    this.show6 = ! this.show6;
}
  ngOnInit(): void {
  }

}
