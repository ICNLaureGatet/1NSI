let listeChap = ["reseaux", "IHMWeb", "systExplo", "CaptActio", "Algorithmique", "GenumSI"];
let listeSousPartie = [
    ["Filius", "coursReseaux"],
    ["HTML", "CSS", "Javascript"],
    ["infosGen", "commandes"],
    ["CapteursArduino", "Arduino", "EntreesSorties"],
    ["RechercheDicho", "Algoknn", "AlgoGloutons"],
    []
]
let contenuDiv = {} //j'en fais un objet plutôt qu'une liste


function initialization() {

    //Je récupère le contenu de chaque div de la page
    //Tout d'abord ceux des chapitres (de listeChap)
    for (let i = 0; i < listeChap.length; i++) {
        console.group("listeChap[i]:", listeChap[i])
        contenuDiv[listeChap[i]] = document.getElementById(listeChap[i]).innerHTML
    }
    //Et ceux des sous-parties
    for (let i = 0; i < listeChap.length; i++) {
        if (listeSousPartie[i].length > 0) {
            for (let j = 0; j < listeSousPartie[i].length; j++) {
                contenuDiv[listeSousPartie[i][j]] = document.getElementById(listeSousPartie[i][j]).innerHTML;
            }
        }
        contenuDiv[listeChap[i]] = document.getElementById(listeChap[i]).innerHTML
    }
    //On détruit enfin tout ce que contenait la page
    for (let i = 0; i < listeChap.length; i++) {
        document.getElementById(listeChap[i]).innerHTML = ""
    }
    document.querySelector('body').style.visibility = "visible"
    //Je crée enfin une div qui accueillera le contenu de ce qui sera affiché
    let newDiv = document.createElement('div')
    newDiv.id = "divConteneur"
    document.body.appendChild(newDiv)

    //gestion du clic sur un bouton
    for (prop in contenuDiv) {
        document.getElementById("nav" + String(prop)).onclick = function() {
            let idtexte = this.id.substring(3); //L'id du menu est de la forme nav... donc j'enlève les 3 premiers caractères
            document.getElementById("divConteneur").innerHTML = contenuDiv[idtexte]
            let tmp = document.querySelector('footer')
            document.querySelector('body').removeChild(tmp)
            document.querySelector('body').appendChild(tmp)
        }
    }
    const counter = document.getElementById("counter")
    $('#counter').hide()

    const updateCounter = async() => {
        const data = await fetch("https://api.countapi.xyz/hit/1NSICounter/visits")
        const count = await data.json()
        counter.innerHTML = count.value
    }
    updateCounter()
    $('#voirCompteur').on('click', function() {
        $('#counter').show()
    })

}



window.onload = initialization;
