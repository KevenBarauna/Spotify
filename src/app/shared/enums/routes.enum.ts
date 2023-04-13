import { RouterInterface } from "../interfaces/routes.interface";

export enum enumRoutes {
  EMPTY = '',
  HOME = 'home',
  LOGIN = 'toDo',
  ABOUT = 'toDo',
  PLAY_LIST = 'toDo',
  SONG_PLAY = 'toDo',
  NOT_FOUND = 'notFound'
};

export const enumMenu: RouterInterface[] = [
  {  name: 'Inicio', route: enumRoutes.HOME, icon: '', isProtect: false},
  {  name: 'Login', route: enumRoutes.LOGIN, icon: '', isProtect: false},
  {  name: 'Sobre', route: enumRoutes.ABOUT, icon: '', isProtect: false},
  {  name: 'Playlist', route: enumRoutes.PLAY_LIST, icon: '', isProtect: true},
  {  name: 'Música', route: enumRoutes.SONG_PLAY, icon: '', isProtect: true},
]
