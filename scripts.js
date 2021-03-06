const socialNetwork = document.getElementById('social-networks');
const share = document.getElementById('share');
const profile = document.getElementById('profile');
const cardShare = document.querySelector('.card__share');

const changeColor = (element) =>{
    const isActive = element.hasAttribute('active');
    if(isActive)
    {
        element.style.backgroundColor = 'rgba(255,255,255,1)';
        element.removeAttribute('active');
    }else{
        element.style.backgroundColor = 'hsl(217, 19%, 35%)';
        element.setAttribute('active','true')
    }
}


const showOption = () =>{
    changeColor(cardShare);
    profile.classList.toggle('disabled');
    socialNetwork.classList.toggle('disabled');
    share.classList.toggle('btn-share--active');
}

share.addEventListener('click',showOption);