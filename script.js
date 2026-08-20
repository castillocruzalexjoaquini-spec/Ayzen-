const WHATSAPP = "524612001099";


const productos = [

  { id: 1, name: "Producto Ayzen P1", nombre: "Producto Ayzen P1", price: 250, precio: 250, image: "image/p1.jpg", imagen: "image/p1.jpg", cat: "general", categoria: "general" },

  { id: 2, name: "Producto Ayzen P2", nombre: "Producto Ayzen P2", price: 250, precio: 250, image: "image/p2.jpg", imagen: "image/p2.jpg", cat: "general", categoria: "general" },

  { id: 3, name: "Producto Ayzen P3", nombre: "Producto Ayzen P3", price: 300, precio: 300, image: "image/p3.jpg", imagen: "image/p3.jpg", cat: "general", categoria: "general" },

  { id: 4, name: "Producto Ayzen P4", nombre: "Producto Ayzen P4", price: 300, precio: 300, image: "image/p4.jpg", imagen: "image/p4.jpg", cat: "general", categoria: "general" },

  { id: 5, name: "Producto Ayzen P5", nombre: "Producto Ayzen P5", price: 550, precio: 550, image: "image/p5.jpg", imagen: "image/p5.jpg", cat: "jeans", categoria: "jeans" },

  { id: 6, name: "Producto Ayzen P6", nombre: "Producto Ayzen P6", price: 200, precio: 200, image: "image/p6.jpg", imagen: "image/p6.jpg", cat: "playeras", categoria: "playeras" },

  { id: 7, name: "Producto Ayzen P7", nombre: "Producto Ayzen P7", price: 250, precio: 250, image: "image/p7.jpg", imagen: "image/p7.jpg", cat: "playeras", categoria: "playeras" },

  { id: 8, name: "Producto Ayzen P8", nombre: "Producto Ayzen P8", price: 200, precio: 200, image: "image/p8.jpg", imagen: "image/p8.jpg", cat: "playeras", categoria: "playeras" },

  { id: 9, name: "Producto Ayzen P9", nombre: "Producto Ayzen P9", price: 170, precio: 170, image: "image/p9.jpg", imagen: "image/p9.jpg", cat: "playeras", categoria: "playeras" },

  { id: 10, name: "Producto Ayzen P10", nombre: "Producto Ayzen P10", price: 220, precio: 220, image: "image/p10.jpg", imagen: "image/p10.jpg", cat: "general", categoria: "general" },

  { id: 11, name: "Producto Ayzen P11", nombre: "Producto Ayzen P11", price: 110, precio: 110, image: "image/p11.jpg", imagen: "image/p11.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 12, name: "Producto Ayzen P12", nombre: "Producto Ayzen P12", price: 270, precio: 270, image: "image/p12.jpg", imagen: "image/p12.jpg", cat: "playeras", categoria: "playeras" },

  { id: 13, name: "Producto Ayzen P13", nombre: "Producto Ayzen P13", price: 230, precio: 230, image: "image/p13.jpg", imagen: "image/p13.jpg", cat: "playeras", categoria: "playeras" },

  { id: 14, name: "Producto Ayzen P14", nombre: "Producto Ayzen P14", price: 530, precio: 530, image: "image/p14.jpg", imagen: "image/p14.jpg", cat: "jeans", categoria: "jeans" },

  { id: 15, name: "Producto Ayzen P15", nombre: "Producto Ayzen P15", price: 500, precio: 500, image: "image/p15.jpg", imagen: "image/p15.jpg", cat: "jeans", categoria: "jeans" },

  { id: 16, name: "Producto Ayzen P16", nombre: "Producto Ayzen P16", price: 460, precio: 460, image: "image/p16.jpg", imagen: "image/p16.jpg", cat: "jeans", categoria: "jeans" },

  { id: 17, name: "Producto Ayzen P17", nombre: "Producto Ayzen P17", price: 180, precio: 180, image: "image/p17.jpg", imagen: "image/p17.jpg", cat: "playeras", categoria: "playeras" },

  { id: 18, name: "Producto Ayzen P18", nombre: "Producto Ayzen P18", price: 700, precio: 700, image: "image/p18.jpg", imagen: "image/p18.jpg", cat: "jeans", categoria: "jeans" },

  { id: 19, name: "Producto Ayzen P19", nombre: "Producto Ayzen P19", price: 300, precio: 300, image: "image/p19.jpg", imagen: "image/p19.jpg", cat: "playeras", categoria: "playeras" },

  { id: 20, name: "Producto Ayzen P20", nombre: "Producto Ayzen P20", price: 110, precio: 110, image: "image/p20.jpg", imagen: "image/p20.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 21, name: "Producto Ayzen P21", nombre: "Producto Ayzen P21", price: 110, precio: 110, image: "image/p21.jpg", imagen: "image/p21.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 22, name: "Producto Ayzen P22", nombre: "Producto Ayzen P22", price: 60, precio: 60, image: "image/p22.jpg", imagen: "image/p22.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 23, name: "Producto Ayzen P23", nombre: "Producto Ayzen P23", price: 160, precio: 160, image: "image/p23.jpg", imagen: "image/p23.jpg", cat: "playeras", categoria: "playeras" },

  { id: 24, name: "Producto Ayzen P24", nombre: "Producto Ayzen P24", price: 120, precio: 120, image: "image/p24.jpg", imagen: "image/p24.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 25, name: "Producto Ayzen P25", nombre: "Producto Ayzen P25", price: 540, precio: 540, image: "image/p25.jpg", imagen: "image/p25.jpg", cat: "jeans", categoria: "jeans" },

  { id: 26, name: "Baggy jeans negros bordado sakura rosa + cadenas", nombre: "Baggy jeans negros bordado sakura rosa + cadenas", price: 600, precio: 600, image: "image/p26.jpg", imagen: "image/p26.jpg", cat: "jeans", categoria: "jeans" },

  { id: 27, name: "Playera oversize Freedom Estatua tapándose cara", nombre: "Playera oversize Freedom Estatua tapándose cara", price: 230, precio: 230, image: "image/p27.jpg", imagen: "image/p27.jpg", cat: "playeras", categoria: "playeras" },

  { id: 28, name: "Cadenas pantalón plateadas multicapa estrella", nombre: "Cadenas pantalón plateadas multicapa estrella", price: 70, precio: 70, image: "image/p28.jpg", imagen: "image/p28.jpg", cat: "accesorios", categoria: "accesorios" },

  { id: 29, name: "Playera negra lavada rosa roja minimalista", nombre: "Playera negra lavada rosa roja minimalista", price: 180, precio: 180, image: "image/p29.jpg", imagen: "image/p29.jpg", cat: "playeras", categoria: "playeras" },

  { id: 30, name: "Playera blanca oversize 25 gótica tribal", nombre: "Playera blanca oversize 25 gótica tribal", price: 200, precio: 200, image: "image/p30.jpg", imagen: "image/p30.jpg", cat: "playeras", categoria: "playeras" },

  { id: 31, name: "Baggy jeans negros bordado floral blanco lateral", nombre: "Baggy jeans negros bordado floral blanco lateral", price: 480, precio: 480, image: "image/p31.jpg", imagen: "image/p31.jpg", cat: "jeans", categoria: "jeans" }

];


let cart = JSON.parse(
    localStorage.getItem("ayzen-cart") || "[]"
);

let filter = "all";


/* FORMATO DE PRECIO */

const money = n =>
    `$${n.toLocaleString("es-MX")} MXN`;


/* NOMBRE DE CATEGORÍA */

function catName(c){

    return {

        playeras:"Playeras",
        jeans:"Pantalones",
        accesorios:"Accesorios",
        general:"Otros"

    }[c] || c;

}


/* MOSTRAR PRODUCTOS */

function render(){

    const list =
        filter === "all"
        ? productos
        : productos.filter(
            p => p.cat === filter
        );


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


/* ACTUALIZAR CARRITO */

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
                Tu carrito está vacío.<br>
                Agrega algo que te guste.
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


    items.innerHTML = cart.map(x => {

        const p =
            productos.find(
                y => y.id === x.id
            );


        if(!p) return "";


        total +=
            p.price * x.qty;


        return `

            <div class="cartItem">

                <div>

                    <strong>
                        ${p.name}
                    </strong>

                    <span>
                        ${x.qty} × ${money(p.price)}
                    </span>

                </div>

                <button
                    class="remove"
                    onclick="removeItem(${p.id})"
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


/* AGREGAR PRODUCTO */

function add(id){

    const item =
        cart.find(
            i => i.id === id
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

    openCart();

}


/* ELIMINAR PRODUCTO */

function removeItem(id){

    cart =
        cart.filter(
            x => x.id !== id
        );


    updateCart();

}


/* ABRIR CARRITO */

function openCart(){

    document
        .querySelector("#cart")
        .classList.add("open");


    document
        .querySelector("#overlay")
        .classList.add("show");

}


/* CERRAR CARRITO */

function closeCart(){

    document
        .querySelector("#cart")
        .classList.remove("open");


    document
        .querySelector("#overlay")
        .classList.remove("show");

}


/* PEDIDO POR WHATSAPP */

function whatsapp(){

    if(!cart.length){

        alert(
            "Agrega al menos un producto al carrito."
        );

        return;

    }


    let total = 0;


    const lines =
        cart.map(x => {

            const p =
                productos.find(
                    y => y.id === x.id
                );


            total +=
                p.price * x.qty;


            return `• ${p.name} — ${x.qty} × ${money(p.price)}`;

        });


    const msg =
`Hola, Ayzen. Quiero hacer este pedido:

${lines.join("\n")}

Total aproximado: ${money(total)}

¿Me confirman disponibilidad y forma de entrega/pago?`;


    window.open(
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,
        "_blank"
    );

}


/* FILTROS */

document
    .querySelector("#filters")
    .addEventListener(
        "click",
        e => {

            const button =
                e.target.closest("button");


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


/* ABRIR CARRITO */

document
    .querySelector("#openCart")
    .addEventListener(
        "click",
        openCart
    );


/* CERRAR CARRITO */

document
    .querySelector("#closeCart")
    .addEventListener(
        "click",
        closeCart
    );


/* CERRAR TOCANDO FUERA */

document
    .querySelector("#overlay")
    .addEventListener(
        "click",
        closeCart
    );


/* WHATSAPP */

document
    .querySelector("#wa")
    .addEventListener(
        "click",
        whatsapp
    );


/* VACIAR CARRITO */

document
    .querySelector("#clear")
    .addEventListener(
        "click",
        () => {

            cart = [];

            updateCart();

        }
    );


/* INICIAR */

render();
