import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,new Date(2021,1,2),"June Serem","Oscar Wilde","Be yourself everyone else is already taken.",0,0),
    new Quote(2,new Date(2021,2,3),"Hayzel Serem","Frank Zappa","So many books, so little time.",0,0),
    new Quote(3,new Date(2021,3,4),"Mary Serem","Mahatma Gandhi","Be the change that you wish to see in the world.",0,0),
    new Quote(4,new Date(2021,4,5),"Caroline Serem","J.K. Rowling","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",0,0),
    new Quote(5,new Date(2021,5,6),"Bryan Serem","Mark Twain","If you tell the truth, you don't have to remember anything.",0,0),
    new Quote(6,new Date(2021,6,7),"Japheth Serem","Winston Churchill","The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",0,0),
    new Quote(7,new Date(2021,7,8),"Jaffari Olduriany","Walt Disney","The Way Get Started Is To Quit Talking And Begin Doing.",0,0),
    new Quote(8,new Date(2021,8,9),"Zane Sawe","Will Rogers","Don’t Let Yesterday Take Up Too Much Of Today.",0,0),
    new Quote(9,new Date(2021,9,10),"Bobo","Steve Jobs","If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",0,0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
