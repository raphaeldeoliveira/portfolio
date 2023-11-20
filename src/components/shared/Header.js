import React from "react";

export default function Header(props) {

    const [fullName, setFullName] = React.useState(true);

    const fullNameOrInitials = () => {
        setFullName(window.innerWidth <= 760 ? false : true)
    }

    React.useEffect(() => {
        fullNameOrInitials()
        window.addEventListener("resize", fullNameOrInitials)

        return function() {
            window.removeEventListener("resize", fullNameOrInitials)
        }
    }, [])

    return (
        <header>
            <div className="nome-e-sobrenome">
                <span>{`R${fullName ? "APHAEL" : ""}`}</span>
                <span className="sobrenome">{`C${fullName ? "ARVALHO" : ""}`}</span>
            </div>
            <div>
                <button onClick={props.scrollToButton("cardProjects")}>
                    {props.button1text}
                </button>
                <button onClick={props.scrollToButton("socialMedias")}>
                    {props.button2text}
                </button>
                <div className="toggle-layout}">
                    <span className={`
                        en-text
                        ${props.inEnglish ? "language-off-text" : "language-on-text"}
                    `}>EN</span>
                    <div className={`toogle-component ${props.inEnglish ? "toggle-bg-on" : "toggle-bg-off"}`}>
                        <div 
                            className={`circle ${props.inEnglish ? "circle-direita" : "circle-esquerda"}`}
                            onClick={props.toggleLanguage}
                        ></div>
                    </div>
                    <span className={`br-text ${props.inEnglish ? "language-on-text" : "language-off-text"}`}>BR</span>
                </div>
            </div>
        </header>
    )
}