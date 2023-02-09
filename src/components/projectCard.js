function ProjCard({svg, heading, description, link}){

    return(<div className="project-card">
                {svg}
                <h1>{heading}</h1>
                <p>{description}</p>
                <a href={link}>KNOW MORE</a>
    </div>)
}
export default ProjCard