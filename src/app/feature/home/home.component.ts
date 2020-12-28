import { Component, OnInit } from '@angular/core';
import { HttpServiceTrmService } from '@core/services/http.trm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  trm:String;
  titulo : String = "Bienvenido a Parking Tickets";

  constructor(private trmService: HttpServiceTrmService) {}  
  
  ngOnInit() {
    this.trmService.getTrm().subscribe((trm) => this.trm = trm);
  }

}
