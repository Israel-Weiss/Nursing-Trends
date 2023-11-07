import scores from '../data/score.json'
import nursings from '../data/nursing.json'

export {
    getScoreVals,
    getBreastVals,
    getAgeVals
}

function getBreastVals(measure: string): number[] {
    const line1Items = nursings.filter((i) => !i.year && i.measure === measure)
    return line1Items.map((i) => i.populationRate)
}

function getAgeVals(age: number): number[] {
    const ageItems = nursings.filter((i) => i.age === age && i.measure === 'הנקה מלאה' && i.year)
    return ageItems.map((i) => i.populationRate)
}

function getScoreVals(nstitSize: string) {
    const scoreItems = scores.filter((i) => i.comparisonValue === nstitSize)
    const subjects = ['תנאים פיזיים', 'יעילות הטיפול ', 'העצמת המטופל ', 'רצף טיפולי', 'מתן מידע', 'יחס וכבוד למטופל', 'נכונות להמליץ', 'מטופל בידיים טובות', 'שביעות רצון כללית']
    const scoreVals: number[] = []
    
    subjects.forEach((s) => {
        const avgDiff = scoreItems.find((i) => i.subject === s)?.avgDiff || 0
        scoreVals.push(avgDiff)
    })
    return scoreVals
}

