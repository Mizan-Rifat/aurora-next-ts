import avatar0 from 'assets/avatar/avatar_fallback.webp';
import avatar1 from 'assets/avatar/avatar_1.webp';
import avatar2 from 'assets/avatar/avatar_2.webp';
import avatar3 from 'assets/avatar/avatar_3.webp';
import avatar4 from 'assets/avatar/avatar_4.webp';
import avatar5 from 'assets/avatar/avatar_5.webp';
import avatar6 from 'assets/avatar/avatar_6.webp';
import avatar7 from 'assets/avatar/avatar_7.webp';
import avatar8 from 'assets/avatar/avatar_8.webp';
import avatar9 from 'assets/avatar/avatar_9.webp';
import avatar10 from 'assets/avatar/avatar_10.webp';
import avatar11 from 'assets/avatar/avatar_11.webp';
import avatar12 from 'assets/avatar/avatar_12.webp';
import avatar13 from 'assets/avatar/avatar_13.webp';
import avatar14 from 'assets/avatar/avatar_14.webp';
import avatar15 from 'assets/avatar/avatar_15.webp';
import avatar16 from 'assets/avatar/avatar_16.webp';

export interface User {
  id: number | string;
  name: string;
  avatar: string;
}

export const users = [
  { id: 0, name: 'Manami Suda', avatar: avatar0 },
  { id: 1, name: 'Yaga Masamichi', avatar: avatar1 },
  { id: 2, name: 'Okkotsu Yuta', avatar: avatar2 },
  { id: 3, name: 'Kugisaki Nobara', avatar: avatar3 },
  { id: 4, name: 'Nanami Kento', avatar: avatar4 },
  { id: 5, name: 'Fushiguro  Megumi', avatar: avatar5 },
  { id: 6, name: 'Nitta Akari', avatar: avatar6 },
  { id: 7, name: 'Inumaki  Toge', avatar: avatar7 },
  { id: 7, name: 'Todo Aoi', avatar: avatar8 },
  { id: 8, name: 'Iori Utahime', avatar: avatar9 },
  { id: 9, name: 'Tsukumo Yuki', avatar: avatar10 },
  { id: 10, name: 'Iori Utahime', avatar: avatar11 },
  { id: 11, name: 'Gojo Satoru', avatar: avatar12 },
  { id: 12, name: 'Hanami', avatar: avatar13 },
  { id: 13, name: 'Zenin Maki', avatar: avatar14 },
  { id: 15, name: 'Momo Nishimiya', avatar: avatar15 },
  { id: 16, name: 'Fushiguro Tsumiki', avatar: avatar16 },
];
