
let rawDataBase = `tower-
finds-
inner-
stuck-
arrow-
poems-
label-
swing-
solar-
truly-
tense-
beans-
split-
rises-
weigh-
hotel-
stems-
pride-
swung-
grade-
digit-
badly-
boots-
pilot-
sales-
swept-
lucky-
prize-
stove-
tubes-
acres-
wound-
steep-
slide-
trunk-
error-
porch-
slave-
exist-
faced-
mines-
marry-
juice-
raced-
waved-
goose-
trust-
fewer-
favor-
mills-
views-
joint-
eager-
spots-
blend-
rings-
adult-
index-
nails-
horns-
balls-
flame-
rates-
drill-
trace-
skins`
let wordDecider = function() {
    let dataBase = rawDataBase.split('-');
    let tempWord = dataBase[Math.floor(Math.random() * dataBase.length)].split('')
    tempWord.shift()
    for (let i = 0; i < tempWord.length; i++) {
        tempWord[i] = tempWord[i].toUpperCase()
    }
    return tempWord
}