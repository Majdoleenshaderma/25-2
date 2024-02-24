import IntroStyle from "./intro.module.css"
import { useNavigate } from "react-router-dom";
function Intro() {
    const navigate = useNavigate();
    const onBtnClick = (event) => {
        event.preventDefault();
        navigate("/Noteapp");
    }
    return (
        <>
            <div className={IntroStyle.body}>
                <form onSubmit={onBtnClick}>
                    <h2>My Notes</h2>
                    <input type="text" placeholder="UserName" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <button >Login</button>
                </form>
            </div>


        </>





    )
}
export default Intro;