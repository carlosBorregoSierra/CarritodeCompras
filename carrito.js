let carritoCompra = {
    items: [],
    itemCount: 0,
    total: 0.0
}
const Productos =[ //solo de guia
    {
        id:1,
        nomnbre: 'pc',
        precio: 2.0,
        descripcion: 'xxxx',
        photo: '/img/'
    },
    {
        id:2,
        nomnbre: 'mause',
        precio: 1.0,
        descripcion: 'xxxx',
        photo: '/img/'
    },
    {
        id:3,
        nomnbre: 'Display',
        precio: 4.0,
        descripcion: 'xxxx',
        photo: '/img/'
    }
]
function addCarritoCompra (item){
    let encontrado = carritoCompra.items.find((p)=>item.id == p.id)
    if(!encontrado){
        carritoCompra.items.push(
           {
            ...item,
            cantidad: 1,
           }
        );
    }else{
        carritoCompra= {
            ...carritoCompra,
            items: carritoCompra.items.map(element =>{
                if(element.id === item.id){
                    return{
                        ...element,
                        cantidad: element.cantidad+ 1,
                        itemCount: contarItems(carritoCompra.items)
                    };
                }else{
                    return element;
                    console.log('aqui')
                }
            }
            )
        }
    }
    carritoCompra={
        ...carritoCompra,
        itemCount: contarItems(carritoCompra.items),
        total: sumaTotal(carritoCompra.items)
    }
}
function mostrarCarrito(){
    console.log(carritoCompra.itemCount);
    console.log(carritoCompra.total);
    carritoCompra.items.map((item)=>{
        console.log(item)
    })
}
function eliminarItem(item){
    carritoCompra={
        ...carritoCompra,
        items: carritoCompra.items.filter(element => element.id != item.id)
        }
}
const contarItems = (itemList) =>{
    const cantidad = itemList.reduce((contador, item)=> contador + item.cantidad, 0)
    //console.log(cantidad)
    return cantidad;
}
const sumaTotal = (cartItems)=> cartItems.reduce((total, item)=> total + item.precio * item.cantidad, 0)