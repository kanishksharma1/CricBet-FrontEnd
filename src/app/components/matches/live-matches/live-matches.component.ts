import { Component } from '@angular/core';
import { MatchesService } from 'src/app/services/matchesList/matches.service';

@Component({
  selector: 'app-live-matches',
  templateUrl: './live-matches.component.html',
  styleUrls: ['./live-matches.component.css']
})



export class LiveMatchesComponent {

  constructor(private matchesList:MatchesService){}
  
  matchesType:any;

  list:any={};
  typeMatches:any=[];
  International:[]=[];

  ngOnInit(){
   
   this.matchesList.getMatches("upcoming").subscribe(data=>{
   this.list = data;
   console.log(this.list.typeMatches);
      
  });

 

    

  }

}
