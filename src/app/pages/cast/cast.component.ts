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
      name: "Kelly",
      pronouns: "she/her",
      photoUrl: "/assets/cast/kelly.jpg",
      title: "Cast Lead",
      yearJoined: "Sep 2017",
      roles: "Trixie, Magenta, Janet, Frank, and Rocky",
      favCallback: "Say, have you seen my bicycle horn?",
      whyJoin: "I love this movie and I love attention!"
    },
    {
      name: "Leandra",
      pronouns: "she/they",
      photoUrl: "assets/cast/leandra.png",
      title: "Fearless Leader",
      yearJoined: "June (?) 2009",
      roles: "All of them! I'm usually the MC too, so if you're reading this, have been to our show, and loved/hated the pre-show, that was probably my fault. Thank you/ sorry/ no refunds!",
      favCallback: "What's it like when you're outside in the rain?",
      aboutMe: "I also have a podcast with Kelly! Check us out at rockyhorrorminute.com! And Oscar is NOT a cast consultant, despite what he may say in his bio."
    },
    {
      name: "Eden",
      pronouns: "she/her",
      photoUrl: "assets/cast/eden.jpeg",
      title: "Cast Lead",
      yearJoined: "June 2017",
      roles: "Frank, Columbia, Riff Raff, Stage Manager, Tech Crew",
      aboutMe: `My Frank N. Furter isn't a strict imitation of Tim Curry's performance. It's more like: "What if Frank wasn't so much a toxic narcissist as slightly cringe, desperate for attention, and here to make it everyone's problem?" Columbia, on the other hand, is so close to my actual personality that I hardly deviate from what's on the screen, except that I keep my nipples inside my corset.`,
      instagram: "https://www.instagram.com/edenkitch3n/"
    },
    {
      name: "Damia",
      pronouns: "",
      photoUrl: "assets/cast/damia.png",
      yearJoined: "Oct 2017",
      roles: "Crew, Rocky, Columbia, Dr. Scott, Eddie, Crim, and Transylvanian",
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
      name: "Relle",
      pronouns: "",
      photoUrl: "assets/cast/placeholder5.png",
      yearJoined: "??",
      roles: "Stage Manager",
      whyJoin: "I do what Leandra tells me to do; it's safer that way. The only thing scarier than what happens if I catch you touching the props is Leandra's epic stink eye."
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
      name: "Raygun",
      pronouns: "she/her",
      photoUrl: "assets/cast/raygun.png",
      title: "PR Director",
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
      name: "Oscar Soto Jr.",
      pronouns: "he/him",
      photoUrl: "assets/cast/oscar.png",
      title: "Cast Consultant",
      yearJoined: "Aug 2010",
      roles: "Brad, Rocky, Eddie, Dr. Scott, Trixie, Ralph, Transylvanian, and Tech Crew",
      favCallback: `It's such a silly one, when Frank says “seal of approval”, and then you clap and bark like an actual seal. So dumb, but it tickles me every time.`,
      instagram: "https://www.instagram.com/CROCODLLE/"
    },
    {
      name: "Mike",
      pronouns: "any pronouns",
      photoUrl: "assets/cast/mike2.jpg",
      yearJoined: "Feb 2022",
      roles: "Riff, Brad, Eddie, and Crim",
      favCallback: "What's the worst city in Maryland? Columbia.",
      aboutMe: "I used to shop quite frequently in the worst city in Maryland."
    },
    {
      name: "Spencer",
      pronouns: "he/him",
      photoUrl: "assets/cast/spencer.jpg",
      yearJoined: "Sep 2022",
      roles: "Trixie and Rocky",
      whyJoin: "Because I'm an attention whore!!",
      favCallback: `Riff: "Say good bye to all of this!" Audience: "Good bye all of this!"`,
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
      name: "Lee",
      pronouns: "he/him",
      photoUrl: "assets/cast/lee.jpeg",
      title: "Technical Director",
      yearJoined: "Aug 2017",
      roles: "Lights, Crew",
      whyJoin: `I married into it. Well, really my first show was our third date, she proposed to me during a pre-show, and now I can yell "MA WIFE!" any time I want because it's still 2006.`,
      favCallback: "What's the last sound Amelia Earhart heard?"
    }

    // {
    //   name: "",
    //   pronouns: "",
    //   photoUrl: "assets/cast/placeholder.png",
    //   title: "",
    //   yearJoined: "Aug 2020",
    //   roles: "",
    //   whyJoin: "",
    //   favCallback: "",
    //   aboutMe: "",
    //   twitter: "fakelink.com",
    //   instagram: "fakelink.com",
    //   facebook: ""
    // }
  ]

  sliceCastList(cols: number, index: number) {
    return this.castList.filter((member, curIndex) => {
      return curIndex % cols === index; 
    })    
  }
}
