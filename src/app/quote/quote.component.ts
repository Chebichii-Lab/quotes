import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,new Date(2021,1,2),"June Serem","John Lennon","Life is what happens when you are busy making plans.",0,0),
    new Quote(2,new Date(2021,2,3),"Hayzel Serem","Aristotle","It is in the darkest moments that we must focus to see the light.",0,0),
    new Quote(3,new Date(2021,3,4),"Mary Serem","Mahatma Gandhi","Be the change that you wish to see in the world.",0,0),
    new Quote(4,new Date(2021,4,5),"Caroline Serem","Anne Frank","Whoever is happy shall make thers happy.",0,0),
    new Quote(5,new Date(2021,5,6),"Bryan Serem","Bob Marley","Love the life you live. Live the life you love.",0,0),
    new Quote(6,new Date(2021,6,7),"Japheth Serem","Confucius","Life is really simple but we insist on making it difficult.",0,0),
    new Quote(7,new Date(2021,7,8),"Jaffari Olduriany","Walt Disney","The Way Get Started Is To Quit Talking And Begin Doing.",0,0),
    new Quote(8,new Date(2021,8,9),"Zane Sawe","Theodore Roosevelt","Believe you can and you are half way there!.",0,0),
    new Quote(9,new Date(2021,9,10),"Bobo","Steve Jobs","If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",0,0),
  ];

  addNewQuote(quote: { userName: string; author: string; quote: string; }){
    let quotesLength=this.quotes.length+1;

    let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,0,0);

    this.quotes.push(quoteObj);
  }
  toggleDetails(index: any){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }

  deleteQuote(isDeleted: any,index: any){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this ${this.quotes[index].quote}?`)
      if(remove){
        this.quotes.splice(index,1)
      }
    }

  }

  upvoteFunc(index:number){
      var up=this.quotes[index].upvote+1;
      this.quotes[index].upvote=up;
      
  }

  
  downvoteFunc(index:number){
    var down=this.quotes[index].downvote+1;
    this.quotes[index].downvote=down;
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
