import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
  ) { }

  /**
   * @description push into navigation stack
   * @param {number} pageIndex
   */
  goTo(pageIndex: number) {
    this.navCtrl.push('GradePage', { 'grade': pageIndex });
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'عن التطبيق',
      subTitle: 'تنفيذ الاستاذ أحمد موسى الفيفي والاستاذ عبدالله علي الفيفي. تطوير التطبيق زياد محمد العتيبي ziyad.alotaibe@gmail.com ',
      buttons: ['حسنا']
    });
    alert.present();
  }
}
