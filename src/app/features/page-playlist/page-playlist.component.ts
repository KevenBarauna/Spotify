import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/core/service/service';
import { AlbumsItemsInterface } from 'src/app/shared/interfaces/albumItems.interface';

@Component({
  selector: 'app-page-playlist',
  templateUrl: './page-playlist.component.html',
  styleUrls: ['./page-playlist.component.css'],
})
export class PagePlayListComponent implements OnInit {

  public listAlbum: AlbumsItemsInterface[] = [];
  public urlPlayTrack: string = '';

  constructor(private service: Service) {
    const url = 'browse/new-releases?country=BR&locale=pt-BR%2Cpt%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen %3Bq%3D0.7&offset=1&limit=50'
    this.service.getServiceQuery(url).subscribe((response) => {
      this.listAlbum = response?.albums?.items;
    });
  }

  concatenateNameArtists(album: AlbumsItemsInterface): string{
    const namesArtists = album.artists.map(x => x.name);
    return namesArtists.join();
  }

  onClickPayAlbum(album: AlbumsItemsInterface){
    console.log('Tocar: ', album)
    this.urlPlayTrack = '';
    const url = `albums/${album.id}/tracks`
    this.service.getServiceQuery(url).subscribe((response) => {
      console.log('API: ', response)
      this.urlPlayTrack = response.items[0].preview_url;
    });
  }


  ngOnInit(): void { }


}
