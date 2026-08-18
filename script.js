const WHATSAPP="524612001099";
const products=[
{id:1,name:"Playera Ayzen #01",cat:"playeras",price:499,badge:"NUEVO",image:""},
{id:2,name:"Playera Oversize #02",cat:"playeras",price:549,badge:"",image:""},
{id:3,name:"Pantalón Street #01",cat:"pantalones",price:799,badge:"",image:""},
{id:4,name:"Pantalón Cargo #02",cat:"pantalones",price:849,badge:"LIMITADO",image:""},
{id:5,name:"Gorra Ayzen",cat:"accesorios",price:349,badge:"",image:""},
{id:6,name:"Cadena Street",cat:"accesorios",price:299,badge:"",image:""},
{id:7,name:"Decant 5 ml #01",cat:"decants",price:199,badge:"",image:""},
{id:8,name:"Decant 10 ml #02",cat:"decants",price:299,badge:"",image:""}];
let cart=JSON.parse(localStorage.getItem("ayzen-cart")||"[]"),filter="all";
const money=n=>`$${n.toLocaleString("es-MX")} MXN`;
const catName=c=>({playeras:"Playeras",pantalones:"Pantalones",accesorios:"Accesorios",decants:"Decants"}[c]||c);
function render(){const list=filter==="all"?products:products.filter(p=>p.cat===filter);document.querySelector("#products").innerHTML=list.map(p=>`<article class="product"><div class="pic">${p.image?`<img src="${p.image}" alt="${p.name}">`:`<div class="placeholder">AYZEN</div>`}${p.badge?`<div class="badge">${p.badge}</div>`:""}</div><div class="info"><div class="cat">${catName(p.cat)}</div><div class="name">${p.name}</div><div class="bottom"><span class="price">${money(p.price)}</span><button class="add" onclick="add(${p.id})">AGREGAR +</button></div></div></article>`).join("");updateCart()}
function updateCart(){let count=cart.reduce((a,x)=>a+x.qty,0),total=0;document.querySelector("#count").textContent=count;const el=document.querySelector("#items");if(!cart.length){el.innerHTML='<div class="empty">Tu carrito está vacío.<br>Agrega algo que te guste.</div>';document.querySelector("#total").textContent="$0 MXN";return}el.innerHTML=cart.map(x=>{let p=products.find(y=>y.id===x.id);total+=p.price*x.qty;return `<div class="cartItem"><div><strong>${p.name}</strong><span>${x.qty} × ${money(p.price)}</span></div><button class="remove" onclick="removeItem(${p.id})">ELIMINAR</button></div>`}).join("");document.querySelector("#total").textContent=money(total);localStorage.setItem("ayzen-cart",JSON.stringify(cart))}
function add(id){let x=cart.find(i=>i.id===id);x?x.qty++:cart.push({id,qty:1});updateCart();openCart()}
function removeItem(id){cart=cart.filter(x=>x.id!==id);updateCart()}
function openCart(){document.querySelector("#cart").classList.add("open");document.querySelector("#overlay").classList.add("show")}
function closeCart(){document.querySelector("#cart").classList.remove("open");document.querySelector("#overlay").classList.remove("show")}
function whatsapp(){if(!cart.length)return alert("Agrega al menos un producto al carrito.");let total=0,lines=cart.map(x=>{let p=products.find(y=>y.id===x.id);total+=p.price*x.qty;return `• ${p.name} — ${x.qty} × ${money(p.price)}`});let msg=`Hola, Ayzen. Quiero hacer este pedido:\n\n${lines.join("\n")}\n\nTotal aproximado: ${money(total)}\n\n¿Me confirman disponibilidad y forma de entrega/pago?`;window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank")}
document.querySelector("#filters").onclick=e=>{if(!e.target.dataset.cat)return;document.querySelectorAll("#filters button").forEach(b=>b.classList.remove("active"));e.target.classList.add("active");filter=e.target.dataset.cat;render()};document.querySelector("#openCart").onclick=openCart;document.querySelector("#close").onclick=closeCart;document.querySelector("#overlay").onclick=closeCart;document.querySelector("#wa").onclick=whatsapp;document.querySelector("#clear").onclick=()=>{cart=[];updateCart()};document.querySelector("#menu").onclick=()=>document.querySelector("#nav").classList.toggle("open");document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.querySelector("#nav").classList.remove("open"));document.querySelector("#contactWa").href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola Ayzen, tengo una pregunta sobre sus productos.")}`;render();
