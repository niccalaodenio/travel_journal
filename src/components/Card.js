import  {FaMapMarkerAlt} from "react-icons/fa"
// import img from "../imgs/mountFuji.jpeg";
import style from "../scss/card.module.scss"

const Card = (props) => {
  return (
    <div className={`${style.con} ${style.g1} `}>
      <img src={require(`../imgs/${props.imgUrl}`)} alt="" className={`${style.img} border-radius`}/>
      <div className={`${style.description}`}>
        <div className={`${style.location} d-flex`}>
            <FaMapMarkerAlt size={10} className={`${style.icon}`}/>
            <div className={`${style.country}`}>{props.location}</div>
            <a href={`http://${props.googleMapsUrl}`} className={style.link}>View on Google Map</a>
        </div>
        <h2 className={`${style.h1} ${style.h2mt} ${style.h2mb}`}> {props.title}</h2>
        <div className={`${style.date}`}>
            {props.startDate} -{props.endDate}
        </div>
        <div className={`${style.textDescription}`}>
         {props.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
