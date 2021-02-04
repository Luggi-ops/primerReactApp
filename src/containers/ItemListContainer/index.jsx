import CardComponent from './../../components/CardComponent/';

const ItemListContainer = ({greeting}) =>{
    return(

        <>
            <div className="container">
                <h2>{greeting}</h2>

                <div className="row">
                    <CardComponent stock={5}/>

                    <CardComponent stock={10}/>

                    <CardComponent stock={0}/>
                </div>

                <div className="row">
                    <CardComponent stock={2}/>

                    <CardComponent stock={3}/>

                    <CardComponent stock={1}/>
                </div>
            </div>
        </>

    );
}

export default ItemListContainer;