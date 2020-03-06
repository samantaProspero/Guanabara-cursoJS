function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data= new Date()
    let hora = data.getHours()
    

     msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=0 && hora<12){
        img.src = 'img/manha.png'
        document.body.style.background ='#fcf3aa'
    } else if(hora>=12 && hora<=18){
        img.src = 'img/tarde.png'
        document.body.style.background ='#63622f'
    } else{
        img.src = 'img/noite.png'
        document.body.style.background ='#0f253c'}
}