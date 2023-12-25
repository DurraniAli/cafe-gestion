var items_holder = document.getElementById("items");
var total_facture = document.getElementById("total_facture");

var produits = [
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "20"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "35"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "30"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "40"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "32"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "30"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "20"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "35"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "30"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "40"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "32"
    },
    {
        nom: "PIZZA",
        image: "image café/606d7491a9d13.jpg",
        prix: "30"
    }
];
function afficher_produit() {
    for (let i = 0; i <= produits.length - 1; i++) {
        var one_product = produits[i];
        let photo = document.createElement("img");
        photo.setAttribute("width", "300px");
        photo.setAttribute("height", "330px");
        photo.setAttribute("src", one_product.image);

  
        photo.classList.add("product-image");

        let info_holder = document.createElement("div");
        info_holder.setAttribute("onclick", `choix_produit(${i})`);
        info_holder.setAttribute("id", "dv_produit_" + i);
        let item_name = document.createElement("h3");
        item_name.textContent = one_product.nom + "  " + one_product.prix + " DH";
        info_holder.appendChild(photo);
        info_holder.appendChild(item_name);
        items_holder.appendChild(info_holder);
    }
}


function shearch() {
    let input = document.getElementById("shearch_bar").value;
    console.log(document.getElementById("shearch_bar").value);
    console.log(typeof (input));
    load_image(input);
}

function load_image(a) {
    items_holder.innerHTML = "";
    let checker;
    if (a) {
        let searchResults = produits.filter((item) => {
            return item.nom.includes(a);
        });
        checker = searchResults;
    } else {
        checker = produits;
    }
    checker.forEach((item) => {
        let photo = document.createElement("img");
        photo.setAttribute("width", "300px");
        photo.setAttribute("height", "330px");
        photo.setAttribute("src", item.image);
        photo.classList.add("product-image");

        let info_holder = document.createElement("div");
        info_holder.setAttribute("onclick", `choix_produit(${produits.indexOf(item)})`);
        info_holder.setAttribute("id", "dv_produit_" + produits.indexOf(item));

        let item_name = document.createElement("h3");
        item_name.textContent = item.nom + "  " + item.prix + " DH";

        info_holder.appendChild(photo);
        info_holder.appendChild(item_name);
        items_holder.appendChild(info_holder);
    });
}





function choix_produit(p) {
    var produit_choisi = produits[p];
    var prix = produit_choisi.prix;
    var old_total = total_facture.innerHTML;
    total_facture.innerHTML = (parseFloat(old_total) + parseFloat(prix)).toFixed(2);

    var my_table = document.getElementById("my_table");
    var tr_star = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = produit_choisi.nom;

    var td3 = document.createElement("td");
    td3.textContent = produit_choisi.prix + " DH";
    tr_star.appendChild(td1);

    tr_star.appendChild(td3);
    var tddelete=document.createElement('td');
    var icondelete= document.createElement('img');
    icondelete.setAttribute('src','img/delete.png');
    icondelete.setAttribute('height','32px');
    var rows=document.getElementById("my_table").rows.length;
    icondelete.setAttribute("onclick", `supprimer_produit(${rows},${p})`);
    tddelete.appendChild(icondelete);
    tr_star.appendChild(tddelete);
    my_table.appendChild(tr_star);
}

function calculateTotalAndAlert() {
    alert("Montant total à payer: " + total_facture.innerHTML+" dh");
}
function supprimer_produit(r,p){

    var a=confirm('vous etes sur que vous voulez le supprimer');
    if(a==true){
        var produit_choisi = produits[p];
        var prix = produit_choisi.prix;
        var old_total = total_facture.innerHTML;
        total_facture.innerHTML = (parseFloat(old_total) - parseFloat(prix)).toFixed(2);
    
        document.getElementById("my_table").deleteRow(r);
        
    }
    
}



 
 