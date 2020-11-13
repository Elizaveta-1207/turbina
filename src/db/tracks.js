import madconbeggin from './audio/madconbeggin.mp3';
import Navai from './audio/Navai.mp3';
import Crystalised from './audio/The XX - Crystalised.mp3';
import Infinity_ from './audio/The XX - Infinity .mp3';
import Ilya from './audio/Илья Подстрелов – Вот такие крошка дела,ты меня так долго ждала_(muztron.club).mp3';
import klubnika from './audio/nikolife-miravi-klubnika-bomba.mp3';
import daftPunkFeat from './audio/daft-punk-feat.-julian-casablancas-instant-crush.mp3';
import defaultBackground from '../images/background.png';


export const tracks = [

  {
    id: '№1',
    trackName: 'Контур',
    author: 'Хадн Дадн',
    originalAuthor: 'Варя Карпова и Федя Быстров',
    text: `Мой милый, милый мальчик,
      Моя милая, милая девочка.
      Никогда не знаешь, что будет дальше
      В этой гадкой зиме`,
    link: Crystalised,
    videoLink: 'https://www.youtube.com/watch?v=p2xFqtgwhrU',
    theme: {
      color: '#fff',
      backgroundColor: 'white',
      backgroundImage: `url(${defaultBackground})`,
    },
  },
  {
    id: '№2',
    trackName: 'Лодка',
    author: 'СБПЧ',
    originalAuthor: 'Маруся Романова',
    text: ``,
    link: Infinity_,
    videoLink: '',
    theme: {
      color: '#fff',
      backgroundColor: 'blue',
      backgroundImage: 'linear-gradient(to top, #f43b47 0%, #453a94 100%)',
    },
    albumPicture: 'https://images.unsplash.com/photo-1525253604620-23ac591dbea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80',
  },
  {
    id: '№3',
    trackName: 'Кирпичи',
    author: 'Инди группа',
    originalAuthor: 'Пётр Сковородников',
    text: ``,
    link: madconbeggin,
    videoLink: '',
    theme: {
      color: '#000',
      backgroundColor: 'white',
      backgroundImage: 'linear-gradient(to right, #00dbde 0%, #fc00ff 100%)',
    },
    albumPicture: 'https://images.unsplash.com/photo-1587532635449-61603976e580?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
  },
  {
    id: '№4',
    trackName: 'Стой',
    author: 'АлоэВера',
    originalAuthor: 'Юля Дорошина',
    text: ``,
    link: daftPunkFeat,
    theme: {
      color: '#8B0000',
      backgroundColor: '#98FB98',
      backgroundImage: 'linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)',
    },
    albumPicture: 'https://images.unsplash.com/photo-1565292334631-95d1dd9e2970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=742&q=80',
  },
  {
    id: '№5',
    trackName: 'Вот такие дела',
    author: 'Илья Подстрелов',
    originalAuthor: 'Серёжа Медведев',
    text: `Ты говорила мне, что любишь очень.
      И намекала всё, что замуж хочешь.
      На свадьбах у друзей бывала часто,
      Мечтая о своей...

      А я то, рядовой, служу Отчизне.
      Военным тяжело любить по-жизни.
      И выполнив свой долг, к тебе приеду -
      К девочке моей...

      Вот такие, крошка, дела.
      Ты меня так долго ждала.
      Я серьезных дел не боюсь,
      Возьму и женюсь!`,
    link: Ilya,
    theme: {
      color: '#191970',
      backgroundColor: '#B0E0E6',
      backgroundImage: 'linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)',
    },
    albumPicture: 'https://images.unsplash.com/photo-1566097260929-4ba43aa78fce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  },
  {
    id: '№6',
    trackName: 'Добрая песня',
    author: 'Тени свободы',
    originalAuthor: 'Даша Овчинникова',
    text: `Я верю, что ты немного лучше,
    Немного выше кучи недоразумений,
    В которой мы погрязли не совсем по нашей воле
    
    Бывает страшно, зато не скучно,
    Бывает больно так, что ясно без сомнений —
    На один целых ноль десятых создан мир из боли
    Мы знаем, он может быть чуточку злым,
    Но нету причин и тебе быть таким
    
    Стоять и терпеть и вниз не смотреть,
    Ну и что теперь, раз зубы оскалил этот зверь,
    Я верю — мы, мы сильнее,
    Пускай он кричит, пускай он горит, раз наш мир дерьмо,
    Зачем быть похожим на него?
    Лишь из-за нас он болеет
    
    Мы полагаем, что всё срастется,
    Что небо, сбросив свою серость, улыбнется,
    Так покажи и научи его, как это делать`,
    link: Navai,
    theme: {
      color: '#800000',
      backgroundColor: '#D3D3D3',
      backgroundImage: 'linear-gradient(to top, #e8198b 0%, #c7eafd 100%)',
    },
    albumPicture: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    id: '№7',
    trackName: 'Sad princess',
    author: 'Alai Oli',
    originalAuthor: 'Оля Ерофеева',
    text: `Все горит, но я буду веселиться
    Такой принцип
    Ничего плохого не случится
    Если все уже случилось с тобой
    Пост апокалипсис личный
    Все горит, но я буду веселиться
    Такой принцип, ничего плохого не случится
    Если все уже случилось с тобой`,
    link: klubnika,
    theme: {
      color: '#800080',
      backgroundColor: '#708090',
      backgroundImage: 'linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)',
    },
    albumPicture: 'https://images.unsplash.com/photo-1459305272254-33a7d593a851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
]

export default tracks;
