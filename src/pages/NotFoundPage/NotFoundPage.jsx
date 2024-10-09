import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import nothingGif from "./assets/nothing.gif";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
        <DocumentTitle>Oops!..</DocumentTitle>
        <b>Sorry, requested page was not found! Please, return to <Link to="/">Home Page</Link></b>
        <img src={nothingGif} alt="Sad Pikachu" />
        </div>
    )
};