import './Product.css'
export default function Product(props){
    
    let title ='product card'
    return(
        <>
        <div className='card'>
        <h3 className='h3'>{title}</h3>
        <div className='detail'>
            <img src={props.image} className='img' alt='xyz' />
            <h1>{props.title}</h1>
            <h4>{props.price}$</h4>
            <p>dioqwduqwuqid999999qdodaadaedasddlerai</p>
            <button className='button'>add to bascket</button>
        </div>
        </div>
        </>
    )
}