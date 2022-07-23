import { Component, OnInit } from '@angular/core';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  public postItArray: PostItProxy[] = [

    {
      id: 0,
    title: 'Lorem ipsum',
    annotation: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    color: '#F77D60',
    },
    {
      id: 2,
    title: 'Título do post',
    annotation: 'Lorem ipsum',
    color: '#FEB196',
    },
    {
      id: 3,
    title: 'Título do post',
    annotation: 'Lorem ipsum',
    color: '#D7DF6B',
    },
    {
      id: 4,
    title: 'Título do post',
    annotation: 'Lorem ipsum',
    color: '#FEF496',
    },
    {
      id: 5,
    title: 'Título do post',
    annotation: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    color: '#A2C8E8',
    },
    {
      id: 6,
    title: 'Título do post',
    annotation: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    color: '#C390BC',
    },
  ]

  

  ngOnInit() {
  }

}
