import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  constructor(private dataService: DataServiceService) { }

  defaultImage = 'https://img.youtube.com/vi/ph8LyNIT9sg/maxresdefault.jpg';
  image1 = 'https://blog.playstation.com/tachyon/sites/3/2020/04/49746632758_f9b3e73dc2_ka.jpg?resize=1088,612&crop_strategy=smart';
  image2 = 'https://www.ecestaticos.com/imagestatic/clipping/4c3/4e0/4c34e06493f3e4824b93e179c957819d/cuenta-atras-del-evento-ps5-de-sony-horario-y-donde-ver-el-lanzamiento-de-la-playstation-5.jpg?mtime=1591891444';
  image3 = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/01/sony-playstation-tuit-1850393.jpg';
  image4 = 'https://cnet2.cbsistatic.com/img/aqHGyQKI-ngVJaahqLUW-Ys8aPA=/940x0/2020/06/11/e553ea17-26bf-4ab4-a393-d4eea1b9a12f/image-7.png';
  

  ngOnInit(): void {
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  iniciarVideo() {
    if(this.videoplayer.nativeElement.paused === true && this.videoplayer.nativeElement.controls === false) {
      this.videoplayer.nativeElement.play().subscribe(this.videoplayer.nativeElement.controls = true);
    } 
  }
}
