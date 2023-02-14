import { Component, OnInit } from '@angular/core';
import { Member } from './cast.interface';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent {
  castList: Member[] = [
    {
      name: "Leandra",
      pronouns: "",
      photoUrl: "assets/cast/leandra.png",
      title: "cast lead",
      yearJoined: "June 2011",
      roles: "Magenta, Brad, Frank, Riff Raff, Eddie, Dr. Scott, Columbia, Transylvanian, Trixie, MC, Criminologist, and Janet",
      whyJoin: "I don't know... I've been doing it for a million years and I'm sure I had a great reason at the time. It was probably some teenage rebellion thing. I keep doing it for the money, the fame, and all the fringe benefits of dressing in my underwear in front of strangers."
    },
    {
      name: "Kelly",
      pronouns: "",
      photoUrl: "/assets/cast/kelly.jpg",
      title: "cast lead",
      yearJoined: "Sep 2017",
      roles: "Trixie, Magenta, and Janet",
      whyJoin: "I love this movie and I love attention!"
    },
    {
      name: "Ali",
      pronouns: "",
      photoUrl: "assets/cast/ali.png",
      title: "cast lead",
      yearJoined: "May 2017",
      roles: "Columbia, Frank",
      whyJoin: "I'm desperate for attention and I like hanging out with weirdos. Also because I can tap dance."
    },
    {
      name: "Akeem",
      pronouns: "",
      photoUrl: "assets/cast/akeem.png",
      yearJoined: "July 2017",
      roles: "Criminologist, Dr. Scott, and Riff Raff",
      whyJoin: "I LOVE ROCKY HORROR. PERIOD.",
    },
    {
      name: "Damia",
      pronouns: "",
      photoUrl: "assets/cast/damia.png",
      yearJoined: "Oct 2017",
      roles: "Crew, Transylvanian, Dr. Scott, Crim",
      whyJoin: "So. Much. Fun! And to come out of my performing shell with great people to a fab soundtrack in front of an awesome, engaged, audience."
    },
    {
      name: "Geoffrey",
      pronouns: "",
      photoUrl: "assets/cast/placeholder2.png",
      yearJoined: "Sep 2017",
      roles: "Dr. Scott and Criminologist",
      whyJoin: "Because waving a fiery torch and fronting a fire circus wasn't enough of a theatrical challenge."
    },
    {
      name: "Jake",
      pronouns: "",
      photoUrl: "assets/cast/jake.png",
      yearJoined: "Nov 2017",
      roles: "Tech, Crew, and Rocky",
      whyJoin: "What better way to express myself then through song and dance?"
    },
    {
      name: "Lindsay",
      pronouns: "",
      photoUrl: "assets/cast/placeholder1.png",
      yearJoined: "June 2017",
      roles: "Magenta",
      whyJoin: "To meet like minded sick fucks!"
    },
    {
      name: "Relle",
      pronouns: "",
      photoUrl: "assets/cast/placeholder5.png",
      yearJoined: "??",
      roles: "Stage Manager",
      whyJoin: "I do what Leandra tells me to do; it's safer that way. The only thing scarier than what happens if I catch you touching the props is Leandra's epic stink eye."
    },   
    {
      name: "Raygun",
      pronouns: "she/her",
      photoUrl: "assets/cast/raygun.png",
      yearJoined: "Dec 2017",
      roles: "Janet",
      aboutMe: "I've never lost a sock in the laundry.",
      favCallback: "Buy an umbrella you cheap bitch!"
    }, 
    {
      name: "nuAlli",
      pronouns: "she/her",
      photoUrl: "assets/cast/placeholder4.png",
      yearJoined: "Feb 2022",
      roles: "Columbia, Janet, and Trixie",
      whyJoin: "I'm a slut for applause and an insomniac.",
      favCallback: "Show us how a butterfly masturbates!"
    },
    {
      name: "Lady Morgan",
      pronouns: "she/any",
      photoUrl: "assets/cast/ladym.jpg",
      yearJoined: "Oct 2021",
      roles: "Columbia & Trixie...for now",
      aboutMe: "I realized from the first time I saw Frank standing on the globe singing 'Don't dream it...be it,' that this show was going to change my life. This philosophy has led me to perform over 400 times, before thousands of people. It's fueled decisions that have led me to have some amazing adventures! It's also picked me up from some hard tragedies as well. The RHPS family is Welcoming, fierce, and home to some of the most amazing people I've ever met. ",
    },
    {
      name: "Caitlyn",
      pronouns: "she/her",
      photoUrl: "assets/cast/caitlyn.jpg",
      yearJoined: "Aug 2022",
      roles: "Dr. Scott, Ralph, and Transylvanian",
      whyJoin: "",
      aboutMe: "Weird and Fun Loving. Love to meet new people and do activities with them. You're now my new best friend."
    },
    {
      name: "Lilka",
      pronouns: "she/her",
      photoUrl: "assets/cast/lilka.jpg",
      yearJoined: "Sep 2022",
      roles: "Eddie, Crim, Dr. Scott, Translyvanian",
      favCallback: "Hey Frank, say something in Klingon!"
    }
  
    // {
    //   name: "",
    //   pronouns: "",
    //   photoUrl: "assets/cast/placeholder.png",
    //   yearJoined: "Aug 2020",
    //   roles: "",
    //   whyJoin: "",
    //   twitter: "fakelink.com",
    //   instagram: "fakelink.com"
    // }
  ]

  sliceCastList(cols: number, index: number) {
    return this.castList.filter((member, curIndex) => {
      return curIndex % cols === index; 
    })    
  }
}
