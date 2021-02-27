const socialNetwork = document.getElementById('social-networks');
const share = document.getElementById('share');
const profile = document.getElementById('profile');
const cardShare = document.querySelector('.card__share');

const changeColor = () =>{
    if(cardShare.hasAttribute('active'))
    {
        cardShare.style.backgroundColor = 'hsl(210, 46%, 95%)';
        cardShare.removeAttribute('active');
    }else{
        cardShare.style.backgroundColor = 'hsl(217, 19%, 35%)';
        cardShare.setAttribute('active','true')
    }
}


const showOption = () =>{
    changeColor();
    profile.classList.toggle('disabled');
    socialNetwork.classList.toggle('disabled');
    socialNetwork.style.transform = 'translateX(0)';
}

share.addEventListener('click',showOption);