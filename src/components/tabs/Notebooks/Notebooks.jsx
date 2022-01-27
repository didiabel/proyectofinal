import { useContext } from "react";
import { TecnoContext } from "../../../Store/appContext";
import CardsProductos from "../../CardsProductos";

const Notebooks = () => {
    const { productos,search} = useContext(TecnoContext);

    const Notebooks = productos.filter(pro =>pro.tipo === "Laptop")

    return ( 
        <div className="d-flex flex-wrap justify-content-around">
        {Notebooks.filter(val=>{
                if(search==''){
                    return productos
                }else if (val.nombre.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map(note=>(
            <CardsProductos key={note.id} producto={{...note}}/>
        ))}
        </div>
     );
}
 
export default Notebooks;