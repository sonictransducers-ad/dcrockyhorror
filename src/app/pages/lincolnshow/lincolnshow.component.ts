import { Component } from '@angular/core';

@Component({
  selector: 'app-lincolnshow',
  templateUrl: './lincolnshow.component.html',
  styleUrls: ['./lincolnshow.component.scss', '../calendar/calendar.component.scss']
})
export class LincolnshowComponent {
  cast = {
    frank: "Kelly, Eden",
    janet: "nuAlli, Emerson",
    brad: "Brad, Jeff B",
    riff: "Mike2, Damia",
    magenta: "Leandra, Lindsay",
    columbia: "Lady Morgan, Giorgio",
    rocky: "Stewart, Oscar",
    eddie: "Nat",
    scott: "Caitlyn",
    crim: "Geoff",
    trixie: "Kay Ray",
    lights: "Lee & Alina",
    stagemanager: "Relle",
    runningcrew: "Brad, Nat, Sam, Frankie, Henry, Damia, Giorgio, Jeff B, Oscar, Zoe, Makenzie, Emerson, Tatiana, Kay Ray, Caitlyn, Augustus"
  };
}
