import { useContext } from "react";
import { TecnoContext } from "../../../Store/appContext";
import CardsProductos from "../../CardsProductos";

const Tablets = () => {

    const { productos,search} = useContext(TecnoContext);

    const Tablet = productos.filter(pro =>pro.tipo === "Tablet")

    return ( 
        <div className="d-flex flex-wrap justify-content-around">
        {Tablet.filter(val=>{
                if(search==''){
                    return productos
                }else if (val.nombre.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map(celu=>(
            <CardsProductos key={celu.id} producto={{...celu}}/>
        ))}
        </div>
     );
}
 
export default Tablets;