import { Component } from '@angular/core';

@Component({
  selector: 'app-push-noti',
  templateUrl: './push-noti.component.html',
  styleUrls: ['./push-noti.component.css']
})
export class PushNotiComponent {

  // constructor(private swPush:SwPush,private apiRest:ApiRestService){
  //   this.subscribeToNotifications()
  // }

  // PUBLIC KEY
  public readonly VAPID_PUBLIC_KEY = 'BIPZi0FyOoYv-gCEUjEW_mYP1IS5H1tuw77uWvDKHItLhm6SiE-YpOIFRopIKF18cNK2_jM12IuwkCvZV-PQQ3A'


}
