import image from './assets/image.jpg' 
import { Block, ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './classes/blocks'

const text = 'Трудись работай не бойся завтро укрепи сознание сердце остовайся человеком не потеряй себя'

export const model = [
    new TitleBlock(
        'Конструктор сайтов на чистом JavaScript', 
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    ),
    new ImageBlock(
        image, 
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content' : 'center'
            },
            imageStyles:{
                width: '500px',
                height: 'auto'
            },
            alt: 'Картинка',
        }
    ),
    new ColumnsBlock(
        [   
            'Приложение на чистом JavaScript, без использования библиотек', 
            'Узнаеш как работают принципы Solid и ООП в JavaScript за один курс', 
            'JavaScript - это просто, интересно. Научись создовать любые UI своими руками'
        ], 
        {
            styles: {
                background: 'linear-gradient( to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }
    ),
    new TextBlock(
        text,
        {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    ),
]