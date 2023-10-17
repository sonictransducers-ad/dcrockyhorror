import { Component } from '@angular/core';

@Component({
  selector: 'app-lincolnshow',
  templateUrl: './lincolnshow.component.html',
  styleUrls: ['./lincolnshow.component.scss', '../calendar/calendar.component.scss']
})
export class LincolnshowComponent {
  cast= {
    frank: "Kelly, Eden",
    janet: "nuAlli, Emerson",
    brad: "Kat, Brad",
    riff: "Mike2, Damia",
    magenta: "Leandra, Lindsay",
    columbia: "Lady Morgan, Giorgio",
    rocky: "Stewart, Oscar",
    eddie: "Nat",
    scott: "Caitlyn",
    crim: "Geoff",
    trixie: "Kate",
    lights: "Lee & Alina",
    stagemanager: "Relle",
    runningcrew: "Brad, Nat, Sam, Frankie, Henry, Damia, Giorgio, Jeff B, Oscar, Zoe, Makenzie, Emerson, Tatiana, Kate, Caitlyn, Augustus"
  };
}
