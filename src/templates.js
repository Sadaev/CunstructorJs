import {row, col, css} from './utils'

function title(block){
    const {tag = h1, styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}



function image(block){
    const {styles = {}, imageStyles : imgS = {}, alt = ''} = block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(imgS)}"/>`, css(styles))
}

function columns(block){
    const cols = block.value.map(col).join('')
    return row(cols, css(block.options.styles))
}
function text(block){
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))
}


export const templates = {title, text, columns, image}