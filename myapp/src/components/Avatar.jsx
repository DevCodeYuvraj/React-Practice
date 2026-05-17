import avatar from "../assets/avatar.svg"
export function Avatar() {
    return (
        <div className="image">
            <div className="picture">
                <img src={avatar} alt="" />
            </div>
        </div>)
}
