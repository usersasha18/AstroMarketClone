import { Link } from "react-router";

export default function Footer() {
    return <>
        <h1>Header</h1>
        <Link to={"/"}>Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/product/:id">Продукт</Link>
        <Link to="/cart">Карт</Link>
    </>
}