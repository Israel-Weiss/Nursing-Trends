import { ReactElement } from "react"
import BreastlCmp from "../cmps/breast-cmp"
import AnnualCmp from "../cmps/annual-cmp"
import ScoreCmp from "../cmps/score-cmp"

export function Home(): ReactElement {
    return <div className="main-continer home">
        <div className="trend2"><ScoreCmp /></div>
        <div className="trend1"><AnnualCmp /></div>
        <div className="trend3"><BreastlCmp /></div>
    </div>
}