import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("user_h8jvPXks8He4eKqaSJNEE");

export const TecnoContext = createContext(null);

const TecnoProvider = ({ children }) => {
  //useState de usuario logueado
  const [userLoged, setUserLoged] = useState(false);

  // valores de los inputs de login y registrarse
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //base de datos
  const [productos, setProductos] = useState([
    {
      id: 1,
      tipo: "Celular",
      nombre: "iPhone 11",
      precio: 20000,
      descripcion:
        "El modelo básico del último celular de Apple es quizás el mejor que se ha fabricado. Aparte de la excelente cámara y los colores, el teléfono de Apple tiene la mejor batería hasta la fecha, que te durará todo el día trabajando. También es muy fino, algo que hace fácil llevarlo a cualquier sitio en el bolsillo de la chaqueta o tu bolsa de trabajo. El Apple iPhone 11 no recibirá una actualización hasta finales de este año, así que lo puedes comprar sin remordimientos.",
    },
    {
      id: 2,
      tipo: "Tablet",
      nombre: "Amazon Fire HD 8 (2020)",
      precio: 5000,
      descripcion:
        "Amazon Fire HD 8 (2020) posee una pantalla IPS HD de 8 pulgadas con resolución 1280x800 píxeles y 189 ppp. Cuenta con un filtro polarizador avanzado para cuidar la vista. El rendimiento aumenta un 30% gracias al nuevo procesador de cuatro núcleos a 2 GHz. La memoria también aumenta de 1,5 a 2 GB de RAM.",
    },
    {
      id: 3,
      tipo: "Laptop",
      nombre: "Thinkpad 5",
      precio: 150000,
      descripcion: "Las características de cada producto pueden variar según el país de adquisición del mismo, por lo que la siguiente descripción no debe ser interpretada como un compromiso contractual. Te invitamos a revisar las características específicas para cada producto antes de realizar la compra online en la sección 'Ver Modelos' de esta misma página, o con un asesor de ventas si es en una tienda física.",
    },
    {
      id: 4,
      tipo: "Celular",
      nombre: "Google Pixel 4",
      precio: 40000,
      descripcion:
        "Los Google Pixel se han convertido en el foco de la compañía de Mountain View. El Pixel 4 es el tope de gama que no se actualizará hasta Octubre de 2020. Tiene una nuevo diseño — sin “notch” — y una gran cámara. Cuenta con el sistema Android virgen, quizás la mejor opción disponible, y todas las aplicaciones de Google pre-instaladas, desde Docs hasta el Calendario. También ofrece las últimas actualizaciones de Android directamente desde Google y antes que nadie. La batería es su único punto negro pero, gracias a su precio, es uno de los celulares más atractivos en el mundo Androide.",
    },
    {
      id: 5,
      tipo: "Tablet",
      nombre: "Tablet Xiaomi 11 Mi Pad 5 6GB 128GB gris",
      precio: 87999,
      descripcion:
        "La tablet Xiaomi 11 Mi Pad 5 6GB 128GB posee una pantalla WQHD+ de 11' pulgadas - Resolución de pantalla 1600 x 2560 px - Resolución de video Dolby Vision® - Modelo del procesador Qualcomm® Snapdragon™ 860 - Cámara principal 13 MP - Cámara frontal 8 MP - Memoria RAM 6 GB - Memoria Interna 128 GB - Wi-Fi - Bluetooth 5.0 - Sistema operativo Android / 11, MIUI 12.5 - Puerto de carga USB-C.",
    },
    {
      id: 6,
      tipo: "Laptop",
      nombre: "HP Spectre x360",
      precio: 170000,
      descripcion:
        "El laptop 2-en-1 HP Spectre x360 ha tenido una gran actualización en 2020 y las mejore especificaciones técnicas — con procesadores Intel Core de 10ª generación  y nuevos gráficos Intel Iris Plus — además del impecable diseño 2-en-1 lo ha catapultado al número 1 de nuestra lista de los mejores portátiles. HP lleva una buena racha últimamente, con el excelente HP Elite Dragonfly también en esta lista, pero cuando se trata de calidad de construcción, diseño y rendimiento puro, el HP Spectre x360 (2020) es por ahora el mejor portátil que puedes comprar ahora mismo en 2020. Y aunque es cierto que cuesta muchos dólares, tiene unos extras excelentes de serie, como unas medidas de seguridad formidables y altavoces Bang & Olufsen. Si te importa la estética tanto como te importa la potencia y la calidad, el HP Spectre x360 (2020) es tu nuevo laptop.",
    },
    {
      id: 7,
      tipo: "Celular",
      nombre: "Samsung Galaxy Note 10 Plus",
      precio: 40000,
      descripcion:
        "El Galaxy Note 10 Plus es el celular más grande y potente de Samsung. Quizás es un modelo demasiado grande para el público en general pero lo hemos incluido en esta lista como la mejor elección para personas que puedan substituir su PC portátil y teléfono por una máquina única. Una pantalla gigante, un lápiz S Pen para poder tomar notas en cualquier momento, una batería enorme de 4300mAh, un procesador Snapdragon 855 y 12GB de RAM hacen de este modelo una máquina que puede dártelo casi todo.",
    },
    {
      id: 8,
      tipo: "Tablet",
      nombre: "Samsung Tab S6 Lite",
      precio: 10000,
      descripcion:
        "La tablet  Galaxy Tab S6 es una de las mejores que hay ahora mismo en el mercado, pero está enfocada a los profesionales y tiene un precio elevado. Samsung lo sabe, y por eso ha lanzó en 2020 la nueva Galaxy Tab S6 Lite, una versión más ligera, pero ni mucho menos recortada en prestaciones. Incluso conserva el famoso S-Pen, el lápiz óptico de gran precisión, y uno de los mayores atractivos de esta tablet. Su diseño es casi idéntico al de su hermana mayor, aunque tiene algunos recortes, como la desaparición de lector de huellas y una de las cámaras traseras. Se queda con una cámara trasera de 8 MP y una delantera de 5 MP para hacer videollamadas. También tiene dos altavoces Dolby Atmos y AKG.",
    },
    {
      id: 9,
      tipo: "Laptop",
      nombre: "Dell XPS 13",
      precio: 150000,
      descripcion:
        "El Dell XPS 13 ha estado siempre en la parte de arriba de nuestras listas durante años y el modelo de 2019 se ha llevado la corona de la general. Un diseño excepcional y ligero, componentes potentes y una pantalla ‘Infinity Edge’ sin casi bordes han hecho del Dell XPS 13 el laptop Windows más popular. Dell ofrece personalización con un gran número de opciones, así que puedes adaptarlo exactamente a lo que necesites en la mayoría de las ocasiones.",
    },
    {
      id: 10,
      tipo: "Celular",
      nombre: "Samsung Galaxy S10 Plus",
      precio: 50000,
      descripcion: "El Samsung Galaxy S10+ es el más poderoso de la serie Galaxy S10. Con una pantalla AMOLED QHD+ de 6.4 pulgadas, el Galaxy S10+ está potenciado por el procesador Exynos 9820 octa-core, con opciones de 6GB y 128GB de almacenamiento. La cámara triple del Galaxy S10+ tiene la misma configuración de 12 MP + 12 MP + 16 MP de su hermano menor el S10, incluyendo zoom, OIS, lente wide y PDAF dual pero su cámara para selfies es dual, de 10 MP + 8 MP. Con una batería de 4100 mAh con carga rápida inalámbrica que puede a su vez cargar otros dispositivos, el Galaxy S10+ tiene lector de huellas bajo pantalla, puerto USB-C, parlantes stereo, sonido Dolby, optimizaciones AKG y corre One UI basado en Android 9.0 Pie. El Galaxy S10+ también debuta con su versión cerámica en blanco o negro.",
    },
    {
      id: 11,
      tipo: "Tablet",
      nombre: "Lenovo Smart Tab",
      precio: 30000,
      descripcion:
        "Lenovo ha aprovechado esto para lanzar un nuevo concepto de tablet combinado con altavoz inteligente, que proporciona al usuario las ventajas de ambos dispositivos: reproducción de contenidos multimedia y juegos, reproducción de música con buena calidad de sonido, navegación por Internet y control de la Smart Home.",
    },
    {
      id: 12,
      tipo: "Laptop",
      nombre: "Huawei MateBook 13",
      precio: 150000,
      descripcion:
        "Huawei lo ha hecho otra vez y el Huawei MateBook X Pro de 2019 se ha convertido en uno de nuestros portátiles favoritos, con los potentes componentes  — como la tarjeta gráfica dedicada Nvidia MX150 — y el diseño de bajo peso que esperarías de un laptop de gama alta pero con precios asequibles. Es increíble lo mucho que ofrece el MateBook 13 por un precio tan barato, sobre todo comparándolo contra los Ultrabook de la competencia. Esto lo convierte en el mejor valor de nuestra lista aunque no tenga puertos Thunderbolt 3 o una pantalla de 4K como el Dell XPS 13 o el MacBook Pro. Aunque el gobierno americano tiene un embargo en Huawei, tanto Microsoft como Intel han anunciado que seguirán dando soporte a los portátiles de la compañía china, lo que significa que el MateBook 13 y otros modelos seguirán siendo actualizados con nuevas versiones de Windows.",
    },
    {
      id: 13,
      tipo: "Celular",
      nombre: "OnePlus 7T",
      precio: 90000,
      descripcion:
        "Si estás buscando un celular para trabajar y disfrutar que sea fiable y sólido, el OnePlus es una opción excelente y el OnePlus 7T es uno de sus mejores modelos a un precio justo y asequible — de los más asequibles que hay en el mercado para toda su funcionalidad. El interfaz de usuario es excelente, suave como la mantequilla caliente gracias a un refresco de pantalla de 90Hz. La batería de 3,800mAh es excelente. El OnePlus 7T salió en octubre de 2019, así que todavía tienes casi un año por delante hasta que salga el 8T.",
    },
    {
      id: 14,
      tipo: "Tablet",
      nombre: "Lenovo Yoga Smart Tab",
      precio: 100000,
      descripcion:
        "Posee unos enormes altavoces duales JBL Hi-Fi que no solo son fantásticos para escuchar música o ver series, sino que además actúan como base para dejar la tablet apoyada en una mesa. Y dan mucho juego, porque permiten apoyar la tablet tanto en vertical como en horizontal.",
    },
    {
      id: 15,
      tipo: "Laptop",
      nombre: "MacBook Pro (16-inch, 2019)",
      precio: 200000,
      descripcion:
        "El MacBook Pro 15 ha muerto y en buena hora porque ese teclado era un infierno de problema. El MacBook Pro (16-inch, 2019) lo soluciona y además es tan fino y tiene el mismo tamaño que el de 15 pulgadas... excepto que han aumentado el tamaño de la pantalla — realmente excelente, por cierto — a 16 pulgadas gracias a los marcos muy reducidos. Puntos extra: el sonido es francamente bueno.",
    },
  ]);
  //base de usuarios y su usestate
  const [users, setUsers] = useState([{ name: "admin@admin.com", password: "admin" },
  {
    name: "greelow@admin.com",
    password: "greelow",
  },
  {
    name: "pdtc@admin.com",
    password: "pdtc",
  },]);

  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) !== null ? JSON.parse(localStorage.getItem('wishlist')):[])


    //para total de la compra
    const [precioTotal, setPrecioTotal]=useState(0)
  //funcion para agregar producto
  const addProduct = (product, precionuevo) =>{
    const error = wishlist.find(wish =>wish.id === product.id)
    if (error) return toast.error('Este producto ya esta en tu Carrito')
    setWishlist([product, ...wishlist])
    setPrecioTotal(parseInt(precioTotal) + parseInt(precionuevo) )
    toast.success('Agregado al carrito')
}
//funcion para eliminar del carrito
const deleteCarrito = (id,precionuevo) =>{
setWishlist(wishlist.filter(wish=>wish.id != id))
setPrecioTotal(parseInt(precioTotal) - parseInt(precionuevo))
toast.error('Eliminado del carrito')
}
//delete producto para el admin
const deleteAdmin = (id) =>{
  setProductos(productos.filter(producto=>producto.id != id))
}

//para el filtro del navegador
  const [search, setSearch] = useState("")

  //para comprar
  const[compras,setCompras]=useState([])


  //si no hay productos en el wishlist
  const [noHayProductos, setNoHayProductos]=useState(false)


  
  const comprar = (wish, precioTotal) =>{

    const newCompra = {
      wish, 
      userName: userLoged, precioTotal
    }
  setCompras([...compras,newCompra])

    var templateParams = {
      to: userLoged,
      from: "Tecno Green",
      user: userLoged,
      compra: newCompra,
      notes: 'gracios por tu compra'
  };
   
  emailjs.send('service_p7fpczf', 'template_sgn81h5', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });

      
      setWishlist([])
      setPrecioTotal(0)
      toast.success("Compra Realizada")
  }
  //values de inputs para agregar producto para admin
  const [newid, setNewid] = useState("")
    const [newnombre, setNewnombre] = useState("")
    const [newtipo, setNewtipo] = useState("")
    const [newprecio, setNewprecio] = useState("")
    const [newdescripcion , setNewdescripcion] = useState("")
  //funcion agregar productos admin
  const agregarProductosAdmin = (e) =>{
    e.preventDefault();
    setProductos([{id:newid, nombre: newnombre,tipo:newtipo, precio: newprecio,descripcion: newdescripcion},...productos])
    setNewid("")
    setNewnombre("")
    setNewtipo("")
    setNewprecio("")
    setNewdescripcion("")
    toast.success('Producto Agregado con éxito')
}

//funcion para eliminar usuarios admin

const deleteUser = id =>{
    setUsers(users.filter(user=> user.name !=id))
    toast.success('Usuario eliminado con éxito')
}
  return (
    <TecnoContext.Provider
      value={{
        productos,
        setProductos,
        wishlist,
        setWishlist,
        userLoged,
        setUserLoged,
        users,
        setUsers,
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        search, 
        setSearch,
        addProduct,
        deleteCarrito,
        comprar,compras,setCompras,precioTotal, setPrecioTotal,
        noHayProductos,setNoHayProductos, deleteAdmin,
        agregarProductosAdmin, deleteUser,newid, setNewid,newnombre, setNewnombre,newtipo, setNewtipo,newprecio, setNewprecio,newdescripcion , setNewdescripcion
      }}
    >
      {children}
    </TecnoContext.Provider>
  );
};

export default TecnoProvider;
