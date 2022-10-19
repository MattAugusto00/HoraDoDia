function carregar(){
  let msg=document.getElementById('msg')
  let img=document.getElementById('imagem')
  let data=new Date()
  let hora=data.getHours()

  msg.innerHTML=`Agora são ${hora} horas`

  if(hora>=0 && hora<12){
    img.src="../pratica/img/manha.jpg"
  }else if(hora>=12 && hora<17){
    img.src="../pratica/img/tarde.jpg"
  }else if(hora==17 || hora==18){
    img.src="../pratica/img/fimTarde.jpg"
  }else{
    img.src="../pratica/img/noite.jpg"
  }
}