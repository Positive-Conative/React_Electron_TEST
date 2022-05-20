// import React from "react";
import "./App.css";
import GoogleButton from "./Pages/GoogleButton";

function App() {
    function handleGoogleLogin(data: any) {
        console.log("OKOK", data);
    }
    return (
        <div className="App">
            <GoogleButton onGoogleLogin={handleGoogleLogin} />
        </div>
    );
}

export default App;
