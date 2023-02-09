function Cards(props){
return (
    <div className="card">
        <div className="card-img">
            <img src={props.CardImg} alt="" ></img>
        </div>
        <div className="card-content">
            <h2>{props.cardHeading}</h2>
            <a href={props.link}>KNOW MORE</a>
        </div>
    </div>
)
}
export default Cards