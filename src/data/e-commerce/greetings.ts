import avatar_1 from 'assets/avatar/avatar_1.webp';
import avatar_3 from 'assets/avatar/avatar_3.webp';
import avatar_4 from 'assets/avatar/avatar_4.webp';
import avatar_5 from 'assets/avatar/avatar_5.webp';
import avatar_6 from 'assets/avatar/avatar_6.webp';
import avatar_7 from 'assets/avatar/avatar_7.webp';
import avatar_9 from 'assets/avatar/avatar_9.webp';
import avatar_10 from 'assets/avatar/avatar_10.webp';
import avatar_12 from 'assets/avatar/avatar_12.webp';
import avatar_14 from 'assets/avatar/avatar_14.webp';

export interface Stat {
  icon: string;
  value: string;
  subtitle: string;
}

export interface MeetingSchedule {
  title: string;
  time: string;
  attendants: {
    name: string;
    avatar: string;
  }[];
}

export const stats: Stat[] = [
  {
    icon: 'material-symbols-light:ads-click-rounded',
    value: '2,110',
    subtitle: 'Visitors',
  },
  {
    icon: 'material-symbols-light:request-quote-outline-rounded',
    value: '$8.2M',
    subtitle: 'Earnings',
  },
  {
    icon: 'material-symbols-light:shopping-cart-checkout-rounded',
    value: '1,124',
    subtitle: 'Orders',
  },
];

export const meetingSchedules: MeetingSchedule[] = [
  {
    title: 'Colab with Tintin',
    time: '1:30pm - 2:30pm',
    attendants: [
      { name: 'Name 1', avatar: avatar_12 },
      { name: 'Name 2', avatar: avatar_1 },
      { name: 'Name 3', avatar: avatar_9 },
    ],
  },
  {
    title: 'Greetings with marketing',
    time: '9:45am - 11:30am',
    attendants: [
      { name: 'Name 4', avatar: avatar_6 },
      { name: 'Name 5', avatar: avatar_10 },
      { name: 'Name 6', avatar: avatar_7 },
      { name: 'Name 7', avatar: avatar_9 },
      { name: 'Name 8', avatar: avatar_14 },
    ],
  },
  {
    title: 'Meeting with shipping',
    time: '2:40pm - 4:30pm',
    attendants: [
      { name: 'Name 9', avatar: avatar_4 },
      { name: 'Name 10', avatar: avatar_3 },
      { name: 'Name 11', avatar: avatar_5 },
      { name: 'Name 12', avatar: avatar_14 },
      { name: 'Name 13', avatar: avatar_1 },
      { name: 'Name 14', avatar: avatar_10 },
    ],
  },
];
