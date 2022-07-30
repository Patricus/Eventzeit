import React from "react";
import "./404.css";
import partyFoul from "../../images/party-foul.jpg";

function Page404() {
    return (
        <main>
            <div id="notFound">
                <h1>404 Page Not Found!</h1>
                <img src={partyFoul} alt="party foul" />
            </div>
        </main>
    );
}

export default Page404;
