import { Component } from '@angular/core';
import { LOCALSTORAGE } from 'src/app/data';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  private saveData = (function () {
    const a = document.createElement('a');
    return function (data: any, fileName: any) {
      const blob = new Blob([data], { type: 'octet/stream' }),
        url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
  })();

  private NOW() {
    let date = new Date();
    date.setHours(date.getHours() + 1);
    let aaaa: any = date.getUTCFullYear();
    let gg: any = date.getUTCDate();
    let mm: any = date.getUTCMonth() + 1;

    if (gg < 10) gg = '0' + gg;

    if (mm < 10) mm = '0' + mm;

    let cur_day = aaaa + '-' + mm + '-' + gg;

    let hours: any = date.getUTCHours();
    let minutes: any = date.getUTCMinutes();
    let seconds: any = date.getUTCSeconds();

    if (hours < 10) hours = '0' + hours;

    if (minutes < 10) minutes = '0' + minutes;

    if (seconds < 10) seconds = '0' + seconds;

    return cur_day + '-' + hours + ':' + minutes + ':' + seconds;
  }

  public backup() {
    const data = localStorage.getItem(LOCALSTORAGE.CLIENTS);
    this.saveData(data, `backup-${this.NOW()}.json`);
  }
}
