import { Component, OnInit } from '@angular/core';
import { BigService } from '../big.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private bigService: BigService;
  public userLog: User = new User();
  public tmpUser: User;

  constructor(service: BigService) {
    this.bigService = service;
  }

  ngOnInit() {
  }


  public loginCheck() {
    // Résultat de la demande de vérif dans la base de données
    if (this.userLog.identifiant == "guerlainhomolog" && this.userLog.password == "xgffapoldv") {
      sessionStorage.setItem("hasAccess", "true");
    } else {
      sessionStorage.setItem("hasAccess", "false");
    }

  }

}
