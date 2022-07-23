import { Component, Input, OnInit } from '@angular/core';
import { PostItProxy } from '../models/proxies/postit.proxy';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.scss'],
})
export class PostitComponent implements OnInit {

  constructor() { }

    @Input()
    public postIt: PostItProxy;
  

  ngOnInit() {}

}
