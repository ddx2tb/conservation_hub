import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import News from "@/components/News/News";
import Tasks from "@/components/Tasks/Tasks";
import {Fragment} from "react";

export default function Home() {
    return (
        <Fragment>
            <Header/>
            <main>
                <div className="container">
                    <Projects/>

                    <div className="separator"></div>

                    <div className="two_rows">
                        <News/>
                        <Tasks/>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}
