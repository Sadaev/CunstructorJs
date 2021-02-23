const model = [
    {type:'title', value:'Hello World from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'columns', value: ['111111', '2222222222', '333333333333']}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''
    if(block.type === 'title'){
        html = `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
    }else if(block.type === 'text'){
        html = `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
        `
    }else if(block.type === 'columns'){
        html = `
            <div class="row">
            ${block.value.forEach(col => {
                return `
                <div class="col-sm">
                    ${col}
                </div>
                `
            })}
            </div>
        `
    }
    $site.insertAdjacentHTML('beforeend', html)
})