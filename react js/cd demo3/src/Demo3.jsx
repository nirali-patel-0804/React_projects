 export default function Add(props)
{
    
    let a= 10;
    let b = 20;
    let c = a+b;
    return(
        <>
        <h1> a + b = {c}   { props.brand }</h1>
        <img src ="src/image/cake1.jpg" />
        <Sub name={"xyz"} />
        <Mul />
        <Div />
        </>
          )
}
function Sub(props)
{
    let a= 10;
    let b = 20;
    let c = a-b;
    return(
        <>
        <h1> a - b = {c} {props.name}</h1>
        
        </>
          )
}
function Mul()
{
    let a= 10;
    let b = 20;
    let c = a*b;
    return(
        <>
        <h1> a * b = {c} </h1>
        
        </>
          )
}
function Div()
{
    let a= 10;
    let b = 20;
    let c = a/b;
    return(
        <>
        <h1> a / b = {c} </h1>
        
        </>
          )
}

