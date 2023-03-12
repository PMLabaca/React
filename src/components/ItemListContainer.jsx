import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState ([])
    const {id} = useParams();

/*      useEffect(() => {
        const db = getFirestore();
        const itemsCollection =collection(db, "productos");

        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item);
        });
        console.log("Se agregaron los productos");
    }, []); */

    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
        });
    }, [id]);

    return (
        <div className="container my-5">
            <ItemList items={items}/>  
        </div>
    )
}

export default ItemListContainer