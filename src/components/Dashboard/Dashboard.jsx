import { useContext, useState } from 'react/cjs/react.development';
import { TecnoContext } from '../../Store/appContext';
import './Dashboard.css'

const Dashboard = () => {
    const { productos, setProductos,setUsers, userLoged } = useContext(TecnoContext);
    const [newid, setNewid] = useState("")
    const [newnombre, setNewnombre] = useState("")
    const [newtipo, setNewtipo] = useState("")
    const [newprecio, setNewprecio] = useState("")
    const [newdescripcion , setNewdescripcion] = useState("")
    
    const sendForm = (e) =>{
        e.preventDefault();
        setProductos([{id:newid, nombre: newnombre,tipo:newtipo, precio: newprecio,descripcion: newdescripcion},...productos])
        setNewid("")
        setNewnombre("")
        setNewtipo("")
        setNewprecio("")
        setNewdescripcion("")
        // console.log(productos);
    }

    
    
    return ( 
        <div>
            
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Agregar Productos</a>
                            </li>
                            <li className="nav-item">
                        <a className="nav-link" href="#">Eliminar productos</a>
                            </li>
                            <li className="nav-item">
                        <a className="nav-link" href="#">Eliminar productos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
                <div className='row d-flex justify-content-center pb-5'>
                <h3 className='text-center pt-4'>Admin Workspace</h3>
                <div className='col-12 d-flex justify-content-center'>
                <img src={require(`../../img/profile.jpg`)} className="card-img-top imagenadmin" alt="admin"/>
                </div>   
                  <div className='col-12 justify-content-center formuprod'>
                   <h4 className='text-center pt-4 pb-4'>Agregar productos</h4>
                        <form onSubmit={sendForm}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Id </span>
                            <input type="number" value={newid} onChange={(e)=>setNewid(e.target.value)}  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nombre </span>
                            <input type="text" value={newnombre} onChange={(e)=>setNewnombre(e.target.value)}  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Tipo </span>
                            <input type="text" value={newtipo} onChange={(e)=>setNewtipo(e.target.value)}  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Precio </span>
                            <input type="number" value={newprecio} onChange={(e)=>setNewprecio(e.target.value)}  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Descripción </span>
                            <input type="text" value={newdescripcion} onChange={(e)=>setNewdescripcion(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <button type="submit"  class="btn btn-secondary mt-2">Agregar</button>
                        </form>
                        
                        <h4 className='text-center pt-4 pb-4'>Eliminar productos</h4>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Id </span>
                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <button type="submit" class="btn btn-danger mt-3">Eliminar</button>
                        <h4 className='text-center pt-4 pb-4'>Eliminar usuarios</h4>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Id </span>
                            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <button type="submit" class="btn btn-danger mt-3">Eliminar</button>
                            
                        
                    </div>
                </div>
        </div>
     );
}
 
export default Dashboard;