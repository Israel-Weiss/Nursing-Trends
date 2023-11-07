import { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './cmps/header'
import { Home } from './pages/home'
import { BreastPercent } from './pages/breast-percent'
import { AnnualTrend } from './pages/annual-trend'
import { ScoreDiff } from './pages/score-diff'
import './assets/scss/global.scss'

export default function App(): ReactElement {

    return <div className='main-app'>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='graph-a' element={<BreastPercent />} />
            <Route path='graph-b' element={<AnnualTrend />} />
            <Route path='graph-c' element={<ScoreDiff />} />
        </Routes>
    </div>
}


