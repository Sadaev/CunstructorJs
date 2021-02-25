export function title(block){
    return `
    <div class="row">
        <div class="col-sm">
            <h1>${block.value}!!!!</h1>
        </div>
    </div>
`
}

export function text(block){
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
}

export function columns(block){
    const items = block.value.map(column => `<div class="col-sm">${column}</div>`).join('')
    return `
        <div class="row">
            ${items}
        </div>
    `
}

export function image(block){
    return `
    <div class="row">
        <img src="${block.value}"/>
    </div>
    `
}