import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Intro_angular_i18n';

  public changeLanguage(code: string) {
    localStorage.setItem('locale', code);
    window.location.reload();
  }
}