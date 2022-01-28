import "./Footer.css";
const Footer = () => {
  return (
    <div className="w-100">
    <div className="redes p-3 ">
    
    <form className=" m-3" action="https://submit-form.com/bA76s9dw">
      <div className="d-flex justify-content-around">
        <div className="carta p-3">
  <div>Calificanos! solo toma un segundo!</div>
  <div className="d-flex justify-content-around">
    <div className="d-flex justify-content-between">
  <div>
    <input type="radio" id="1" name="rating" value="1" required="" />
    <label className="m-2" htmlFor="1">1️</label>
  </div>
  <div>
    <input type="radio" id="2" name="rating" value="2" required="" />
    <label className="m-2" htmlFor="2">2️</label>
  </div>
  <div>
    <input type="radio" id="3" name="rating" value="3" required="" />
    <label className="m-2" htmlFor="3">3️</label>
  </div>
  <div>
    <input type="radio" id="4" name="rating" value="4" required="" />
    <label className="m-2" htmlFor="4">4️</label>
  </div>
  <div>
    <input type="radio" id="5" name="rating" value="5" required="" />
    <label className="m-2" htmlFor="5">5️</label>
  </div>
  </div>
  </div>
  <button type="submit" className="btn btn-outline"><p className="text m-2">Enviar Calificacion</p></button>
  </div>
  </div>
</form>
<a href="https://www.facebook.com/profile.php?id=100077536331922"rel="nofollow" target="_blank"><i className="bi bi-facebook"></i></a>
    <a href="https://www.instagram.com/tecno_green12/?hl=es-la" rel="nofollow" target="_blank"><i className="bi bi-instagram"></i></a>
    <a href="https://www.youtube.com/watch?v=GUBkhoaK-tc"rel="nofollow" target="_blank"><i className="bi bi-youtube"></i></a>
    <h6 className="text-center p-4 footer"> © Sitio hecho por TecnoGreen 2022 </h6>
   </div>
   </div>
  );
};
export default Footer;