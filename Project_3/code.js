const out = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  out.innerHTML = date.toLocaleTimeString();
},1000)