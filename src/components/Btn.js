function Btn(props){
    const onClick = (e)=>{
        console.log(props.name)
    }

    return(
        <>
            <button type="submit" onClick={onClick} className={`btn ${props.class}`}>{props.name}</button>
        </>
    )
}

export default Btn;
