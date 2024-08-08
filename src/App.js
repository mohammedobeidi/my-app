import React, { createContext, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, useParams, useNavigate } from 'react-router-dom';
import './App.css';


const LastVisitedContext = createContext();

function LastVisitedProvider({ children }) {
    const [lastVisitedId, setLastVisitedId] = useState(localStorage.getItem('lastVisitedId') || null);

    const updateLastVisitedId = (id) => {
        setLastVisitedId(id);
        localStorage.setItem('lastVisitedId', id);
    };

    return (
        <LastVisitedContext.Provider value={{ lastVisitedId, updateLastVisitedId }}>
            {children}
        </LastVisitedContext.Provider>
    );
}

const useLastVisited = () => useContext(LastVisitedContext);

const products = [
    { title: 'potato', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];


function Error() {
    return <h1>Error: Page Not Found</h1>;
}


function Potato() {
    return (
        <div>
            <h2>Potato is not a fruit</h2>
            <h3>id : {products.id}</h3>
        </div>
    );
}

function Garlic() {
    return (
        <div>
            <h2>Garlic is not a fruit</h2>
            <h3>id :{products.id}</h3>
        </div>
    );
}

function Apple() {
    return (
        <div>
            <h2>Apple is a fruit</h2>
            <h3>id :{products.id}</h3>
        </div>
    );
}

function ProductPage() {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <Error />;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <h2>Id: {product.id}</h2>
            <p>{product.isFruit ? 'This is a fruit.' : 'This is not a fruit.'}</p>
        </div>
    );
}

function ShoppingList() {
    const navigate = useNavigate();
    const { updateLastVisitedId } = useLastVisited();

    const handleClick = (id) => {
        updateLastVisitedId(id);
        navigate(`/items/${id}`);
    };

    return (
        <ul>
            {products.map(product => (
                <li
                    key={product.id}
                    style={{ color: product.isFruit ? 'red' : 'green' }}
                >
                    {product.title}
                    <button id='button-p' onClick={() => handleClick(product.id)}>go to {product.title}</button>
                </li>
            ))}
        </ul>
    );
}

function HomePage() {
    const { lastVisitedId } = useLastVisited();
    const lastVisitedProduct = products.find(p => p.id === parseInt(lastVisitedId, 10));

    const navigate = useNavigate();

    return (
        <div>
            <h1>Shopping List</h1>
            <ShoppingList />
            
            {lastVisitedProduct && (
                <div>
                    <h2>Last Visited Product</h2>
                    <p>{lastVisitedProduct.title} - {lastVisitedProduct.isFruit ? 'Fruit' : 'Not a Fruit'} - Id: {lastVisitedId} </p>
                </div>
            )}
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <Error />,
    },
    {
        path: '/potato',
        element: <Potato />,
    },
    {
        path: '/garlic',
        element: <Garlic />,
    },
    {
        path: '/apple',
        element: <Apple />,
    },
    {
        path: '/items/:id',
        element: <ProductPage />,
    },
    {
        path: '*',
        element: <Error />,
    },
]);

function App() {
    return (
        <LastVisitedProvider>
            <RouterProvider router={router} />
        </LastVisitedProvider>
    );
}

export default App;
