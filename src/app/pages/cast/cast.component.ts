import { Component, OnInit } from '@angular/core';
import { Member } from './cast.interface';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {
  castList: Member[] = [
    {
      name: "Leandra",
      pronouns: "(she/her)",
      photoUrl: "assets/cast/leandra.png",
      title: "cast lead",
      yearJoined: "2009",
      roles: "Magenta, Brad, Frank, Riff Raff, Eddie, Dr. Scott, Columbia, Transylvanian, Trixie, MC, Criminologist, and Janet",
      whyJoin: "I don't know... I've been doing it for a million years and I'm sure I had a great reason at the time. It was probably some teenage rebellion thing. I keep doing it for the money, the fame, and all the fringe benefits of dressing in my underwear in front of strangers."
    },
    {
      name: "Akeem",
      pronouns: "(he/him)",
      photoUrl: "assets/cast/akeem.png",
      yearJoined: "2017",
      roles: "Criminologist, Dr. Scott, and Riff Raff",
      whyJoin: "I LOVE ROCKY HORROR. PERIOD.",
    },
    {
      name: "Ali",
      pronouns: "(she/her)",
      photoUrl: "assets/cast/ali.png",
      title: "cast lead",
      yearJoined: "2017",
      roles: "Columbia, Frank",
      whyJoin: "I'm desperate for attention and I like hanging out with weirdos. Also because I can tap dance."
    },
    {
      name: "Damia",
      pronouns: "(she/her)",
      photoUrl: "assets/cast/damia.png",
      yearJoined: "2017",
      roles: "Crew, Transylvanian, Dr. Scott, Crim",
      whyJoin: "So. Much. Fun! And to come out of my performing shell with great people to a fab soundtrack in front of an awesome, engaged, audience."
    },
    {
      name: "Geoffrey",
      pronouns: "(he/him)",
      photoUrl: "assets/cast/placeholder.png",
      yearJoined: "2017",
      roles: "Dr. Scott and Criminologist",
      whyJoin: "Because waving a fiery torch and fronting a fire circus wasn't enough of a theatrical challenge."
    },
    {
      name: "Jake",
      pronouns: "(he/him)",
      photoUrl: "assets/cast/jake.png",
      yearJoined: "2017",
      roles: "Tech, Crew, and Rocky",
      whyJoin: "What better way to express myself then through song and dance?"
    },
    {
      name: "Kelly",
      pronouns: "(she/her)",
      photoUrl: "/assets/cast/131215884_933490503724578_5634215199573546675_n.jpg",
      title: "cast lead"
      yearJoined: "2017",
      roles: "Trixie, Magenta, and Janet",
      whyJoin: "I love this movie and I love attention!"
    },
    {
      name: "Lindsay",
      pronouns: "(she/her)",
      photoUrl: "assets/cast/placeholder2.png",
      yearJoined: "2017",
      roles: "Magenta",
      whyJoin: "To meet like minded sick fucks!"
    },
    {
      name: "Relle",
      pronouns: "(she/her)",
      photoUrl: "assets/cast/placeholder2.png",
      yearJoined: "2017",
      roles: "Magenta",
      whyJoin: "I do what Leandra tells me to do; it's safer that way. The only thing scarier than what happens if I catch you touching the props is Leandra's epic stink eye."
    },    
  
    // {
    //   name: "",
    //   pronouns: "()",
    //   photoUrl: "assets/cast/placeholder.png",
    //   yearJoined: 2020,
    //   roles: "",
    //   whyJoin: "",
    // twitter: "fakelink.com",
    // instagram: "fakelink.com"
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
