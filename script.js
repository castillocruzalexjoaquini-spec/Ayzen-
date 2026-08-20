const WHATSAPP = "524612001099";


/* =========================
   PRODUCTOS
   TUS 31 PRODUCTOS
========================= */

const productos = [

  { id: 1, name: "Producto Ayzen P1", nombre: "Producto Ayzen P1", price: 250, precio: 250, image: "images/p1.jpg", imagen: "imagess/p1.jpg", cat: "general", categoria: "general" },

  { id: 2, name: "Producto Ayzen P2", nombre: "Producto Ayzen P2", price: 250, precio: 250, image: "images/p2.jpg", imagen: "imagess/p2.jpg", cat: "general", categoria: "general" },

  { id: 3, name: "Producto Ayzen P3", nombre: "Producto Ayzen P3", price: 300, precio: 300, image: "images/p3.jpg", imagen: "images/p3.jpg", cat: "general", categoria: "general" },

  { id: 4, name: "Producto Ayzen P4", nombre: "Producto Ayzen P4", price: 300, precio: 300, image: "images/p4.jpg", imagen: "images/p4.jpg", cat: "general", categoria: "general" },

  { id: 5, name: "Producto Ayzen P5", nombre: "Producto Ayzen P5", price: 550, precio: 550, image: "images/p5.jpg", imagen: "images/p5.jpg", cat: "jeans", categoria: "jeans" },

  { id: 6, name: "Producto Ayzen P6", nombre: "Producto Ayzen P6", price: 200, precio: 200, image: "images/p6.jpg", imagen: "images/p6.jpg", cat: "playeras", categoria: "playeras" },

  { id: 7, name: "Producto Ayzen P7", nombre: "Producto Ayzen P7", price: 250, precio: 250, image: "images/p7.jpg", imagen: "images/p7.jpg", cat: "playeras", categoria: "playeras" },

  { id: 8, name: "Producto Ayzen P8", nombre: "Producto Ayzen P8", price: 200, precio: 200, image: "images/p8.jpg", imagen: "images/p8.jpg", cat: "playeras", categoria: "playeras" },

  { id: 9, name: "Producto Ayzen P9", nombre: "Producto Ayzen P9", price: 170, precio: 170, image: "images/p9.jpg", imagen: "images/p9.jpg", cat: "playeras", categoria: "playeras" },

  { id: 10, name: "Producto Ayzen P10", nombre: "Producto Ayzen P10", price: 220, precio: 220, image: "images/p10.jpg", imagen: "images/p10.jpg", cat: "general", categoria: "general" },

  { id: 11, name: "Producto Ayzen P11", nombre: "Producto Ayzen P11", price: 110, precio: 110, image: "images/p11.jpg", imagen: "images/p11.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 12, name: "Producto Ayzen P12", nombre: "Producto Ayzen P12", price: 270, precio: 270, image: "images/p12.jpg", imagen: "images/p12.jpg", cat: "playeras", categoria: "playeras" },

  { id: 13, name: "Producto Ayzen P13", nombre: "Producto Ayzen P13", price: 230, precio: 230, image: "images/p13.jpg", imagen: "images/p13.jpg", cat: "playeras", categoria: "playeras" },

  { id: 14, name: "Producto Ayzen P14", nombre: "Producto Ayzen P14", price: 530, precio: 530, image: "images/p14.jpg", imagen: "images/p14.jpg", cat: "jeans", categoria: "jeans" },

  { id: 15, name: "Producto Ayzen P15", nombre: "Producto Ayzen P15", price: 500, precio: 500, image: "images/p15.jpg", imagen: "images/p15.jpg", cat: "jeans", categoria: "jeans" },

  { id: 16, name: "Producto Ayzen P16", nombre: "Producto Ayzen P16", price: 460, precio: 460, image: "images/p16.jpg", imagen: "images/p16.jpg", cat: "jeans", categoria: "jeans" },

  { id: 17, name: "Producto Ayzen P17", nombre: "Producto Ayzen P17", price: 180, precio: 180, image: "images/p17.jpg", imagen: "images/p17.jpg", cat: "playeras", categoria: "playeras" },

  { id: 18, name: "Producto Ayzen P18", nombre: "Producto Ayzen P18", price: 700, precio: 700, image: "images/p18.jpg", imagen: "images/p18.jpg", cat: "jeans", categoria: "jeans" },

  { id: 19, name: "Producto Ayzen P19", nombre: "Producto Ayzen P19", price: 300, precio: 300, image: "images/p19.jpg", imagen: "images/p19.jpg", cat: "playeras", categoria: "playeras" },

  { id: 20, name: "Producto Ayzen P20", nombre: "Producto Ayzen P20", price: 110, precio: 110, image: "images/p20.jpg", imagen: "images/p20.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 21, name: "Producto Ayzen P21", nombre: "Producto Ayzen P21", price: 110, precio: 110, image: "images/p21.jpg", imagen: "images/p21.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 22, name: "Producto Ayzen P22", nombre: "Producto Ayzen P22", price: 60, precio: 60, image: "images/p22.jpg", imagen: "images/p22.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 23, name: "Producto Ayzen P23", nombre: "Producto Ayzen P23", price: 160, precio: 160, image: "images/p23.jpg", imagen: "images/p23.jpg", cat: "playeras", categoria: "playeras" },

  { id: 24, name: "Producto Ayzen P24", nombre: "Producto Ayzen P24", price: 120, precio: 120, image: "images/p24.jpg", imagen: "images/p24.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 25, name: "Producto Ayzen P25", nombre: "Producto Ayzen P25", price: 540, precio: 540, image: "images/p25.jpg", imagen: "images/p25.jpg", cat: "jeans", categoria: "jeans" },

  { id: 26, name: "Baggy jeans negros bordado sakura rosa + cadenas", nombre: "Baggy jeans negros bordado sakura rosa + cadenas", price: 600, precio: 600, image: "images/p26.jpg", imagen: "images/p26.jpg", cat: "jeans", categoria: "jeans" },

  { id: 27, name: "Playera oversize Freedom Estatua tapándose cara", nombre: "Playera oversize Freedom Estatua tapándose cara", price: 230, precio: 230, image: "images/p27.jpg", imagen: "images/p27.jpg", cat: "playeras", categoria: "playeras" },

  { id: 28, name: "Cadenas pantalón plateadas multicapa estrella", nombre: "Cadenas pantalón plateadas multicapa estrella", price: 70, precio: 70, image: "images/p28.jpg", imagen: "images/p28.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 29, name: "Playera negra lavada rosa roja minimalista", nombre: "Playera negra lavada rosa roja minimalista", price: 180, precio: 180, image: "images/p29.jpg", imagen: "images/p29.jpg", cat: "playeras", categoria: "playeras" },

  { id: 30, name: "Playera blanca oversize 25 gótica tribal", nombre: "Playera blanca oversize 25 gótica tribal", price: 200, precio: 200, image: "images/p30.jpg", imagen: "images/p30.jpg", cat: "playeras", categoria: "playeras" },

  { id: 31, name: "Baggy jeans negros bordado floral blanco lateral", nombre: "Baggy jeans negros bordado floral blanco lateral", price: 480, precio: 480, image: "images/p31.jpg", imagen: "images/p31.jpg", cat: "jeans", categoria: "jeans" }

];


let cart = JSON.parse(
    localStorage.getItem("ayzen-cart") || "[]"
);

let filter = "all";


/* =========================
   PRECIO
========================= */

function money(n){

    return `$${n.toLocaleString("es-MX")} MXN`;

}


/* =========================
   CATEGORIAS
========================= */

function catName(c){

    const names = {

        playeras:"Playeras",

        jeans:"Pantalones",

        accesorios:"Accesorios",

        general:"Otros"

    };

    return names[c] || c;

}


/* =========================
   RENDER PRODUCTOS
========================= */

function render(){

    const list =
        filter === "all"
        ? productos
        : productos.filter(
            p => p.cat === filter
        );


    document.querySelector("#visibleCount").textContent =
        list.length;


    document.querySelector("#products").innerHTML =
        list.map(p => `

        <article class="product">

            <div class="pic">

                ${
                    p.image

                    ?

                    `<img
                        src="${p.image}"
                        alt="${p.name}"
                        loading="lazy"
                        onerror="this.style.display='none';this.parentElement.innerHTML='<div class=&quot;placeholder&quot;>AYZEN</div>';"
                    >`

                    :

                    `<div class="placeholder">
                        AYZEN
                    </div>`
                }

            </div>


            <div class="info">

                <div class="cat">
                    ${catName(p.cat)}
                </div>

                <div class="name">
                    ${p.name}
                </div>

                <div class="bottom">

                    <span class="price">
                        ${money(p.price)}
                    </span>

                    <button
                        class="add"
                        onclick="add(${p.id})"
                    >
                        AGREGAR +
                    </button>

                </div>

            </div>

        </article>

        `).join("");


    updateCart();

}


/* =========================
   CARRITO
========================= */

function updateCart(){

    const count =
        cart.reduce(
            (a,x) => a + x.qty,
            0
        );


    document.querySelector("#count").textContent =
        count;


    const items =
        document.querySelector("#items");


    if(!cart.length){

        items.innerHTML = `

            <div class="empty">

                TU CARRITO ESTÁ VACÍO.

                <br>

                Agrega algo de AYZEN
                para comenzar.

            </div>

        `;


        document.querySelector("#total").textContent =
            "$0 MXN";


        localStorage.setItem(
            "ayzen-cart",
            JSON.stringify(cart)
        );

        return;

    }


    let total = 0;


    items.innerHTML = cart.map(item => {

        const product =
            productos.find(
                p => p.id === item.id
            );


        if(!product) return "";


        total +=
            product.price * item.qty;


        return `

        <div class="cartItem">

            <div>

                <strong>
                    ${product.name}
                </strong>

                <span>
                    ${item.qty} × ${money(product.price)}
                </span>

            </div>

            <button
                class="remove"
                onclick="removeItem(${product.id})"
            >
                ELIMINAR
            </button>

        </div>

        `;

    }).join("");


    document.querySelector("#total").textContent =
        money(total);


    localStorage.setItem(
        "ayzen-cart",
        JSON.stringify(cart)
    );

}


/* =========================
   AGREGAR
========================= */

function add(id){

    const item =
        cart.find(
            x => x.id === id
        );


    if(item){

        item.qty++;

    }else{

        cart.push({

            id:id,

            qty:1

        });

    }


    updateCart();

    showToast();

    openCart();

}


/* =========================
   ELIMINAR
========================= */

function removeItem(id){

    cart =
        cart.filter(
            x => x.id !== id
        );


    updateCart();

}


/* =========================
   CARRITO OPEN
========================= */

function openCart(){

    document
        .querySelector("#cart")
        .classList.add("open");


    document
        .querySelector("#overlay")
        .classList.add("show");

}


/* =========================
   CARRITO CLOSE
========================= */

function closeCart(){

    document
        .querySelector("#cart")
        .classList.remove("open");


    document
        .querySelector("#overlay")
        .classList.remove("show");

}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(){

    const toast =
        document.querySelector("#toast");


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            1600
        );

}


/* =========================
   WHATSAPP
========================= */

function whatsapp(){

    if(!cart.length){

        alert(
            "Tu carrito está vacío."
        );

        return;

    }


    let total = 0;


    const lines =
        cart.map(item => {

            const product =
                productos.find(
                    p => p.id === item.id
                );


            total +=
                product.price * item.qty;


            return `• ${product.name} — ${item.qty} × ${money(product.price)}`;

        });


    const msg =
`Hola, AYZEN.

Quiero hacer este pedido:

${lines.join("\n")}

TOTAL: ${money(total)}

¿Me confirman disponibilidad y forma de entrega/pago?`;


    window.open(
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,
        "_blank"
    );

}


/* =========================
   FILTROS
========================= */

document
    .querySelector("#filters")
    .addEventListener(
        "click",
        event => {

            const button =
                event.target.closest("button");


            if(!button) return;


            document
                .querySelectorAll(
                    "#filters button"
                )
                .forEach(
                    b =>
                        b.classList.remove("active")
                );


            button.classList.add("active");


            filter =
                button.dataset.cat;


            render();

        }
    );


/* =========================
   EVENTOS
========================= */

document
    .querySelector("#openCart")
    .addEventListener(
        "click",
        openCart
    );


document
    .querySelector("#closeCart")
    .addEventListener(
        "click",
        closeCart
    );


document
    .querySelector("#overlay")
    .addEventListener(
        "click",
        closeCart
    );


document
    .querySelector("#wa")
    .addEventListener(
        "click",
        whatsapp
    );


document
    .querySelector("#clear")
    .addEventListener(
        "click",
        () => {

            cart = [];

            updateCart();

        }
    );


/* =========================
   INICIAR
========================= */

render();
