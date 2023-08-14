export interface AlbumsItemsInterface {
  album_type: string
  artists: Artist[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Artist {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface ExternalUrls {
  spotify: string
}

export function getAlbumsItemsInterfaceClean():  AlbumsItemsInterface[]  {

  const list: AlbumsItemsInterface[] = [];
  return list;

}


// constructor() {
//   this.name = '';
//   this.album_type = '';
//   this.artists = []
//   this.available_markets = []
//   this.external_urls = { spotify: '' }
//   this.href = '';
//   this.id = '';
//   this.images = [{
//     height: 0,
//     url: '',
//     width: 0,
//   }]
//   this.release_date = '';
//   this.release_date_precision = '';
//   this.total_tracks = 0
//   this.type = '';
//   this.uri = '';
// }
