import { Component, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    autoplayMouseleaveTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['', ''],
    center: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1.2
      },
      940: {
        items: 2
      }
    },
    nav: true
  };




  imgCharacters: Array<Array<string>> = [
    ['../assets/Gilbert.jpg', 'Gilbert Bougainvillea', 'Gilbert Bougainvillea is a character in the Violet. Evergarden series. He is a major in the Leidenschaftlich army who values Violet more than anything.', "https://violet-evergarden.fandom.com/wiki/Gilbert_Bougainvillea"], ['../assets/violet.jpg', 'Violet Evergarden', 'Violet is a newcomer to the CH Postal Company, and works as an Auto Memory Doll ghostwriter for people to expressing their emotions in letters.', "https://violet-evergarden.fandom.com/wiki/Violet_Evergarden"], ['../assets/Claudia.jpg', 'Claudia Hodgins', 'Claudia Hodgins is a former lieutenant-colonel of the army, but quit the military after the war and established the CH Postal Company.', "https://violet-evergarden.fandom.com/wiki/Claudia_Hodgins"], ['../assets/Cattleya.png', 'Cattleya Baudelaire', 'Cattleya Baudelaire is a character in the Violet Evergarden series. Being a figurehead Auto Memories Doll who works for the CH Postal Company.', "https://violet-evergarden.fandom.com/wiki/Cattleya_Baudelaire"], ['../assets/Erica.jpg', 'Erica Brown', 'Erica Brown is a character in the Violet Evergarden series. She is an Auto Memories Doll who has been working at the CH Postal Company for a while.', "https://violet-evergarden.fandom.com/wiki/Erica_Brown"], ['../assets/Iris.jpg', 'Iris Cannary' ,'Iris Cannary is a character in the Violet Evergarden series. A rookie Auto Memories Doll with an unyielding spirit who works at CH Postal Company, Iris admires young working women and is enthusiastic about quickly making a name for herself in the industry.', "https://violet-evergarden.fandom.com/wiki/Iris_Cannary"], ['../assets/Benedict_Blue.png', 'Benedict Blue' ,'Benedict Blue is a character in the Violet Evergarden series. He is a postman working at the CH Postal Company. He has known Hodgins since before the company establishment and has had a brusque attitude towards him since he start to work there.', "https://violet-evergarden.fandom.com/wiki/Benedict_Blue"]
  ];

  imgDetails: Array<Array<string>> = [['../assets/series.jpg', 'Violet Evergarden - Television series', 'ヴァイオレット・エヴァーガーデン, Season 1', 'Violet Evergarden is a Japanese light novel series written by Kana Akatsuki and illustrated by Akiko Takase. It won the grand prize in the fifth Kyoto Animation Awards novel category in 2014, the first ever work to win a grand prize in any of the three categories.', 'Episode', '8.7/10', 'Anime, Romance, Drama, Fantasy', '2018'], ['../assets/movie1.jpg', 'Eien to Jidou Shuki Ningyou', 'Eternity and the Auto Memory Doll', "Isabella, the daughter of the noble York family, s enrolled in an all-girls academy to be groomed into a dame worthy of nobility Her family notices her struggling in her lessons and decides to hire Violet Evergarden to personally tutor Violet asks if Isabella wishes to write a letter to Taylor. Will Violet be able to help Isabella convey her feelings to her long-lost sister?", 'Movie', '8.4/10', 'Slice of Life, Drama, Fantasy', 'Sep 6, 2019'], ['../assets/movie2.jpg', 'Violet Evergarden The Movie', 'ヴァイオレット・エヴァーガーデン', 'Several years have passed since the end of The Great War. Violet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, "I love you," may still be alive even after the many years that have passed.', 'Movie', '8.84/10', 'Drama, Fantasy', 'Sep 18, 2020']];


  imgMoreWatch: Array<Array<string>> = [
    ['../assets/moviesDone/2.jpg', 'Violet Evergarden: The Movie', '2h 20m - 2020', "https://www1.gogoanime.be/watch/violet-evergarden-movie-Aew2-episode-full/"],
    ['../assets/moviesDone/3.jpg', 'Violet Evergarden: Eternity and the Auto Memory Doll', '2h 0m - 2019',  "https://animepahe.com/anime/149b8608-e8f0-3af5-5475-ee1e8cc3f506"],
    ['../assets/moviesDone/4.jpg', 'Love, Chunibyo & Other Delusions the Movie: Take on Me', '1h 38m - 2018', "https://www.youtube.com/watch?v=MywSVtraM_o"],
    ['../assets/moviesDone/1.jpg', 'A Silent Voice', '2h 10m - 2016', "https://animepahe.com/anime/45f85d88-762c-f9c8-688f-f693a5453f7c"],
    ['../assets/moviesDone/5.jpg', "Beyond the Boundary Movie: I'll Be Here - The Past", '1h 27m - 2015', 'https://www.youtube.com/watch?v=BDpPFIzL6z8'],
    ['../assets/moviesDone/6.jpg', "Beyond the Boundary Movie: I'll Be Here - Mirai-hen", '1h 27m - 2015', "https://www.facebook.com/watch/?extid=SEO----&v=476615189378699"],
  ];

  imgMore: any = [
    {
      id: '1',
      src:'../assets/more/8.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "https://maidragon.jp/2nd/"
    }, 
    {
      id: '2',
      src: '../assets/more/1.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://www.kyotoanimation.co.jp/books/violet/"
    }, 
    {
      id: '3',
      src:'../assets/more/2.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://www.kyotoanimation.co.jp/books/tenyakuryonomajo/"
    }, 
    {
      id: '4',
      src:'../assets/more/3.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://www.kyotoanimation.co.jp/books/sakuranofurumachi/"
    }, 
    {
      id: '5',
      src:'../assets/more/4.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://anime-eupho.com/"
    }, 
    {
      id: '6',
      src:'../assets/more/5.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://tsurune.com/"
    }, 
    {
      id: '7',
      src:'../assets/more/6.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://violet-evergarden.jp/"
    }, 
    {
      id: '8',
      src:'../assets/more/7.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://fs.iwatobi-sc.com/"
    }, 
    {
      id: '9',
      src:'../assets/more/9.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://kyoani-event.com/en/"
    }, 
    {
      id: '10',
      src:'../assets/more/10.jpg',
      alt: '',
      title: 'From Kyoto Studio',
      href: "http://www.kyotoanimation.co.jp/baja/"
    }
  ];

  constructor(){
    
  }

  clicked(element: string){
    document.getElementById(element)?.scrollIntoView();
  }


}
















