//static profile card :-
import { Header } from "../components/Header";
import { Footer } from '../components/Footer'
import StaticProfile from "../components/StaticProfileCard"
// static profile card :-
function staticProfileCardPage() {
    return (
       
            <section id="center">
                <div className="contaniner">
                    <Header />
                    <StaticProfile />
                    <Footer />
                </div>
            </section>)
}

export default staticProfileCardPage;