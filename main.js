const mainwrapper = document.getElementById
('main-wrapper');

const loading = document.querySelector('.loader');
let limit=20;
let page=1;

async function getPhotos() {

    const response = await fetch(`http://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);

    const data =await response.json();
    return data;
}

async function showPhotos()
{
    const photos = await getPhotos();
    photos.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('albums');
        photoElement.innerHTML= `
    <div class="img-album">
        <img src="${photo.thumbnailUrl}" alt="">
    </div>
        <div class="album-info">
            <p>${photo.title}</p>
    </div>`;
    mainwrapper.appendChild(photoElement)
    });

}

showPhotos();

function showLoading(){
    loading.classList.add('show');
    setTimeout(() =>{
        loading.classList.remove('show');

        setTimeout(() =>{
            page++;
            showPhotos();
    
        },1000)
    });
}

showPhotos();

window.addEventListener('scroll', () => {
    const {scrollTop , scrollheight , Clientheight} = 
    document.documentElement;

    if(scrollTop + clientHeight >=scrollHeight -6) {
        showLoading();
    }
})


         
            
    
