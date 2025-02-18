function Th(props){
    const employee = props.employee[0];
    console.log(employee)

    return(
        <th>#{employee.id}</th>
    )
}

export default Th;