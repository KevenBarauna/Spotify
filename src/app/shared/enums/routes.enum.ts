import { RouterInterface } from "../interfaces/routes.interface";

export enum routes {
  HOME = '/home',
  LOGIN = '/toDo',
  ABOUT = '/toDo',
  PLAY_LIST = '/toDo',
  SONG_PLAY = '/toDo',
};

export const enumRoutes: RouterInterface[] = [
  {  name: 'Inicio', route: routes.HOME, icon: '', isProtect: false},
  {  name: 'Login', route: routes.LOGIN, icon: '', isProtect: false},
  {  name: 'Sobre', route: routes.ABOUT, icon: '', isProtect: false},
  {  name: 'Playlist', route: routes.PLAY_LIST, icon: '', isProtect: true},
  {  name: 'Música', route: routes.SONG_PLAY, icon: '', isProtect: true},
]
