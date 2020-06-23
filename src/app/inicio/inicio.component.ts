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
  videoSource = 'https://r2---sn-j5cax8pnpvo-x1xez.googlevideo.com/videoplayback?expire=1592931347&ei=s9_xXqjaKIej7AS405_gDQ&ip=2a0b%3A1587%3A99a6%3A51c%3A782a%3Aa32b%3A196d%3A4f95&id=o-ACwkvA920U6zfK2lYr1pVRp2ccSn0uwR9UTeIYK3nvWV&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=191.982&lmt=1591911139103606&fvip=2&beids=9466587&c=WEB&txp=5516222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgN7uOZPPbhx1hK2rSgZPuX1F6in9d21vVRH06WhJ4PSYCIQCf57C2g48Ap699Agy3ej1eBzuDHSqjiRYnyGxvPbRbrw%3D%3D&rm=sn-4pvgq-n8ve7l,sn-n8vrk7l&fexp=9466587&req_id=d9c5ec7a261da3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=DF&mip=190.245.13.98&mm=29&mn=sn-j5cax8pnpvo-x1xez&ms=rdu&mt=1592909744&mv=m&mvi=1&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIga1q9C1_LaDgwIarOAb5_XgPVQjv-RUsvRyuN3XlhLl8CIBZueBPfVpCDLrb2c8dM4NKo4Efkxw9b1E8vXkbQDwm_';
  

  ngOnInit(): void {
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  iniciarVideo() {
    if(this.videoplayer.nativeElement.paused === true) {
      this.videoplayer.nativeElement.play().subscribe(this.videoplayer.nativeElement.controls = true);
    } 
  }
}
