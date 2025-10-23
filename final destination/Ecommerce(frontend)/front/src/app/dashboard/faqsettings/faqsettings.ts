import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FaqServices } from '../../core/service/faq-services';
import { IFAQ } from '../../models/faq.model';

@Component({
  selector: 'app-faqsettings',
  imports: [],
  templateUrl: './faqsettings.html',
  styleUrl: './faqsettings.css'
})
export class Faqsettings implements OnInit{
    constructor(private faqServices:FaqServices, private cdr:ChangeDetectorRef){}
question!:IFAQ[];
  
ngOnInit(): void {
  this.faqServices.getQustions().subscribe({
  next: (res: any) => {
    this.question= res.data;
    for (const item in this.question)
    {
      // console.log(this.question[item]);
      this.cdr.detectChanges()
    }
  }
  })
  }


}
