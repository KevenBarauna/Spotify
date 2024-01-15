import { RouterInterface } from "../interfaces/routes.interface";

export enum enumRoutes {
  EMPTY = '',
  HOME = 'home',
  LOGIN = 'login',
  ABOUT = 'sobre',
  PLAY_LIST = 'playList',
  SONG_PLAY = 'toDoSONG_PLAY',
  NOT_FOUND = 'notFoundNOT_FOUND'
};

export const enumMenu: RouterInterface[] = [
  {  name: 'Inicio', route: enumRoutes.HOME, icon: '', isProtect: false},
  {  name: 'Sobre', route: enumRoutes.ABOUT, icon: '', isProtect: false},
  {  name: 'Playlist', route: enumRoutes.PLAY_LIST, icon: '', isProtect: true},
  {  name: 'Música', route: enumRoutes.SONG_PLAY, icon: '', isProtect: true},
  {  name: 'Login', route: enumRoutes.LOGIN, icon: '', isProtect: false},
]
