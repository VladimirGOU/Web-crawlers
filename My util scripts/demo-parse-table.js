const words = 
`coca cola
coke
coke zero
cola
diet coke
dr pepper
fanta
fizzy drinks
lemonade
schweppes
sprite
tonic
tonic water
diet coke caffeine free
diet lemonade
ginger ale
soda water 
caffeine free diet coke
cherry coke
coca cola original
coca cola zero
diet coke cans
schweppes lemonade
slimline tonic
zero coke
diet cola
mixers
soda   
pepsi 
pepsi max
pop
tonic water
diet coke caffeine free
diet lemonade
ginger ale
soda water 
caffeine free diet coke
cherry coke
coca cola original
coca cola zero
diet coke cans
schweppes lemonade
slimline tonic
zero coke
diet cola
mixers
soda   
pepsi 
pepsi max
pop`

console.log(
    words
        .split('\n')
        .map((word) => word.trim())
        .filter((word, index, oldWords) => {
            return oldWords.slice(0, index).includes(word,'\n')
        })

)
const seedsAstro = 
`Juice
Minute Maid
Pulpy
Jus
Air mineral
Air minum
Akua
Aqua
Ades
Coca Cola
Coca-Cola
Coca-Cola Zero
Coke
Air Soda
Cola
Fanta
Sprite
AW
Schweppes
Frestea
Fresh tea
Teh
Susu
Susu kemasan
Susu kotak
Nutriboost`

console.log('seeds Astro',
        seedsAstro
            .split('\n')
            .map((seedsAstro) => seedsAstro.trim())
            .filter((seedsAstro, index, oldWords) => {
                return oldWords.slice(0, index).includes(seedsAstro,'\n')
            })
)

