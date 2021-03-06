import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataGetterService } from "../services/data-getter.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  userName: string;
  passWord: string;

  constructor(
    private router: Router,
    private dataGetter: DataGetterService,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  login() {
    this.dataGetter
      .checkUser({
        username: this.userName,
        passwd: this.passWord,
      })
      .subscribe((result) => {
        if (result.hasOwnProperty("error")) {
          this.userNotExistAlert(result.error);
        } else {
          if (result.hasOwnProperty("token")) {
            this.dataGetter.setUser(this.userName);
            this.dataGetter.setToken(result.token);
            this.router.navigate(["/home"]);
          } else {
            this.userNotExistAlert("Unexpected error!");
          }
        }
      });
  }

  async userNotExistAlert(massage) {
    const alert = await this.alertController.create({
      header: "Внимание!",
      subHeader: "Ошибка аутентификации",
      message: massage,
      buttons: ["OK"],
    });
    await alert.present();
  }
}
