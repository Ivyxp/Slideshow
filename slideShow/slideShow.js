const images = [
    { 'id': '1', 'url':'./pics/titans.avif' },
    { 'id': '2', 'url':'./pics/mgaviao.jpeg' },
    { 'id': '3', 'url':'./pics/action-comics.jpg'},
    { 'id': '4', 'url':'./pics/flash.jpg' },
    { 'id': '5', 'url':'./pics/titans.avif' },
    { 'id': '6', 'url':'./pics/cyborg.jpg' },
    { 'id': '4', 'url':'./pics/flash.jpg' },
    { 'id': '5', 'url':'./pics/titans.avif' },
    { 'id': '6', 'url':'./pics/cyborg.jpg' },
    { 'id': '1', 'url':'./pics/titans.avif' },
    { 'id': '2', 'url':'./pics/mgaviao.jpeg' },
    { 'id': '3', 'url':'./pics/action-comics.jpg'}
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);