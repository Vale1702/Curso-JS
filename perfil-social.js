//Social Media Profile
//1. User information
const username = 'codingAdventurer'
const fullName = 'Vale'
const age =27
const isStuddent = true

// 2.Adress
const address = {
    street: '123 CDMX',
    city: 'Techvile',
    state: 'Codingland',
    zipCode: 54190
}

// 3. Hobbies
const hobbies =['Gaming', 'Lisent to music', 'Reading']

// 4. Generating personalized bio

const personalizeBio = `Hi, I'm ${fullName}.
I'm ${age} years old.
I live in ${address.city}.
I love ${hobbies.join(', ')}.
Follow me for coding adventures!
`
//5. Print the user prifile and bio

console.log(personalizeBio)