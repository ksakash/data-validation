import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
    img_array:string[] = [
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SX522_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SX466_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SX679_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SX522_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SX425_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SY450_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SX569_.jpg",
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61DZclqQ4RL._SY355_.jpg"
    ]
    constructor() {
    }
}
