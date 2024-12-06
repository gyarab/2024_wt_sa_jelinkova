console.log('START')

let karty = [
    {
        src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5d0c2ab246786ca1d5e_86.png'
    },
    {
        src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e688ccde70cabd67e8ec_68.png'
    },
    {
        src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e9c4ccde70cabd69cb17_56.png'
    },
]
let pole = [0, 2, 1, 2, 0, 1]
let el = document.getElementById('pexeso')

el.innerHTML = ""
pole.forEach((prvek) => {
    //el.innerHTML += karty[prvek].src + '<br>'
    const newEl = document.createElement('img')
    newEl.src = karty[prvek].src
    el.appendChild(newEl)
})

console.log('END')


function action() {
    //alert('baf')
    let obr = document.getElementById('obr01')
    console.log('--==--')
    console.log(obr)
    let src01 = "https://placecats.com/neo_2/300/200"
    let src02 = "https://placehold.co/600x400"

    if(obr.src === src01) {
      obr.src = src02
    } else {
      obr.src = src01
    }

    let okraj = "5px solid red"

    if(obr.style.border === okraj) {
      obr.style.border = ""
    } else {
      obr.style.border = okraj
    }   
  }


  