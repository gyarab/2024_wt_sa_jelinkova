console.log('START')
//obrazek = policko = figurka

let sirka = 4
let vyska = 4
let poli = sirka * vyska 
let figurek = poli / 2
let hraciPole
let hrac1 = 0 //pocet shrabnutych dvojic - ze zacatku 0
let hrac2 = 0
let hrac1Tah = true //kdo je na tahu, prvni vzdy hrac 1
let neklikat = false

let otoceneObrazky = [] //vzdy budou najednou otocene dva obrazky

const karty = [
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5d0c2ab246786ca1d5e_86.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e688ccde70cabd67e8ec_68.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e9c4ccde70cabd69cb17_56.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5760608f3f68cb0b04b_93.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eb0533090c8030cdab4e_29.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e99627091900881d8abc_61.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e98d7c1109b0a823625b_62.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eb19130054e7a5afae28_24.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ec2515f9e7a640a994d6_07.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eaf01593063206329b88_31.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ea6b437be789ded213fd_45.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ebc088ed608381460504_14.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/671ffb924cdb9c1818e2724c_100.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/671ff422cf42c0c857f6997c_97.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e58bf4a1d9b1b453e5df_91.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5d90608f3f68cb0efc5_85.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5b47785ef9d9fc8040b_89.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eb4819f48592fa6efc03_41.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e594607b5d1305d4f5b7_90.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e9ea16121c4a0759ffbb_53.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ea1dcffcb68152a70549_50.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5fbd9bbb8343a2928d0_82.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e5bd10648166d945ef2f_88.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eab52d22ba929863dc7a_36.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e60bb6da0952c78d7c4c_81.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e659d9bbb8343a2978d3_69.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e97cafdec40d1e0a3df9_64.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3e9ab1c71c3adb2b2e71c_59.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3ec53df5ec1b8405d4de0_02.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66b3eb0ffe019f8eb4b61ffc_28.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/66e99db1f5c63f46f7415051_020.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/671ff00d29c65f1f25fb28c0_95.png'
  },
  {
      src: 'https://bluemoji.io/cdn-proxy/646218c67da47160c64a84d5/671ff18d174384ea7bb16670_96.png'
  }
] //zdroje obrazku

class Policko {
  constructor(otocene, shrabnute, figurka) {
    this.otocene = otocene;
    this.shrabnute = shrabnute;
    this.figurka = figurka;
  }
  isOtocene() {
    return this.otocene
  }
  setOtocene(otocene) {
    this.otocene = otocene
  }
  isShrabnute() {
    return this.shrabnute
  }
  setShrabnute(zmenaShrabnuti) {
    this.shrabnute = zmenaShrabnuti
  }
  getFigurka() {
    return this.figurka
  }
}

novaHra()

function novaHra() {
  document.getElementById("pexeso").innerHTML = ""

  hrac1 = 0
  hrac2 = 0
  hrac1Tah = true
  document.getElementById("tah").innerText = "hráč 1"
  document.getElementById("hrac1").innerText = hrac1
  document.getElementById("hrac2").innerText = hrac2

  sirka = document.getElementById("kartickyRada").value
  vyska = document.getElementById("kartickySloupec").value
  poli = sirka * vyska //kolik je policek
  figurek = poli / 2 //kolik je figurek
  umisteni = new Array(poli) //kde v poli jsou jake figurky
  hraciPole = new Array(poli) 
  let karticka = document.getElementById('pexeso') //vybira element pexeso a vklada do karticky
  karticka.style.setProperty('grid-template-columns', 'repeat(' + vyska + ', 1fr)') //nastaveni poctu sloupcu v gridu podle vyska

  let pouzitiFigurek = new Array(figurek) //kolikrat jsou pouzite stejne figurky
  for (i = 0; i < figurek; i++) 
    pouzitiFigurek[i] = 0
  //nastavujeme to, ze zadna figurka jeste nebyla prirazena policku

  for (i = 0; i < poli; i++) {
    let figurka = -1
    do {
     figurka = Math.floor(Math.random() * figurek) //generujeme nahodne figurky 
    } while (pouzitiFigurek[figurka] == 2) //stejne figurky mohou byt pouzite pouze dvakrat, generujeme znova, dokud neni jina 

    hraciPole[i] = new Policko(false, false, figurka) //pole objektu, kazdemu nastavujeme zakladni hodnoty
    pouzitiFigurek[figurka] += 1 //pouziti nejake figurky se zvetsi o jedna
    /*kontrola*/ console.log("pole: " + i + ", figurka: " + figurka) 

    const kartickaRub = document.createElement('img') //vytvarime element img, tedy obrazek
    kartickaRub.src = rub_img_src //zdroj obrazku
    kartickaRub.addEventListener('click', otoceniKarticky) //pridavame sber udalosti ke kartickaRub, pri kliknuti se spusti funkce otoceniKarticky
    kartickaRub.id = i //pridavame id ke kartickaRub
    /*kontrola*/ console.log(kartickaRub.id)
    karticka.appendChild(kartickaRub) //vkladame kartickaRub = element img do pexesa
  }
  /*kontrola*/ console.log(hraciPole)
  /*kontrola*/ console.log(umisteni) 
}

function otoceniKarticky() {
  if (neklikat) return //zajisteni, ze kdyz jsou ukazane otocene obrazky, tak nemuzeme klikat na jine
  let obrazek = event.target //zjistujeme informace o zmacknutem policku
  let policko = hraciPole[obrazek.id] //podle id policka zjistime jeho objekt
  let figurka = policko.getFigurka() //diky metode getFigurka zjistujeme figurku na policku

  if (!policko.isOtocene()) {
    obrazek.src = karty[figurka].src //pokud neni otocene, tak se zameni rub za smajlik
    policko.setOtocene(true)
    otoceneObrazky.push(obrazek)
  } 

  if (otoceneObrazky.length === 2) { //kontrolujeme, jestlize jsou otocene dva obrazky
    let obrazek1 = otoceneObrazky[0] 
    let obrazek2 = otoceneObrazky[1]
    if (hraciPole[obrazek1.id].getFigurka() != hraciPole[obrazek2.id].getFigurka()) { //kontrola, jestli jsou stejna figurka
      neklikat = true
      setTimeout(() => { 
        obrazek1.src = rub_img_src //na policko vratime rubovou stranu
        hraciPole[obrazek1.id].setOtocene(false) //musime nastavit, ze policko neni
        obrazek2.src = rub_img_src
        hraciPole[obrazek2.id].setOtocene(false)
        otoceneObrazky = []
        hrac1Tah = !hrac1Tah //pokud ted byl hrac 1 na tahu, bude na tahu hrac 2 a naopak
        if (hrac1Tah === true) {
          document.getElementById('tah').innerText = "hráč 1"
        } else {
          document.getElementById('tah').innerText = "hráč 2"
        }
        neklikat = false
    } , 2000)
    } else {
      for (i = 0; i < hraciPole.length; i++) {
        if (hraciPole[i].isOtocene())
          hraciPole[i].setShrabnute(true) //pokud je momentalne policko otocene, tak ho nastavime na shrabnute
      }
      neklikat = true
      otoceneObrazky = []
      if (hrac1Tah === true) {
        hrac1 += 1
        document.getElementById("hrac1").innerText = hrac1
      } else {
        hrac2 += 1
        document.getElementById("hrac2").innerText = hrac2
      }
      setTimeout(() => {
      obrazek1.style.visibility = "hidden"
      obrazek2.style.visibility = "hidden"
      neklikat = false
      }, 2000)
      
    } 
  }
  let jednoNeshrabnute = false
  for (i = 0; i < hraciPole.length; i++) {
    if (hraciPole[i].isShrabnute() == false)
      jednoNeshrabnute = true
  }

  if (jednoNeshrabnute == false)
    vyhlaseniViteze()

  /*kontrola*/ console.log(hraciPole)
  /*kontrola*/ console.log(hrac1Tah)
  /*kontrola*/ console.log(obrazek)
  /*kontrola*/ console.log(policko)
  /*kontrola*/ console.log(figurka)
  /*kontrola*/ console.log(jednoNeshrabnute)
}

function vyhlaseniViteze(){
  document.getElementById("pexeso").innerHTML = ""
  let pexeso = document.getElementById("pexeso")
  let div = document.createElement("div")
  let h2 = document.createElement("h2")
  h2.style.textAlign = "center"
  if (hrac1 > hrac2)
    h2.innerText = "Vyhrál hráč 1!"
  if (hrac2 > hrac1)
    h2.innerText = "Vyhrál hráč 2!"
  if (hrac1 == hrac2)
    h2.innerText = "Remíza!"
  div.appendChild(h2)
  pexeso.appendChild(div)
}

console.log('END')