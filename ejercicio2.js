function list (playlist, newSong ){

    playlist.shift()
    playlist.unshift(newSong)

    return playlist
}
const InitialList=['Ligth Up','Perfect Drug','Heathens','Chlorine']
const newSongAdd = 'Hold On Till May'

const updatedList= list(InitialList,newSongAdd)
console.log(InitialList)
console.log('New song to add',newSongAdd)
console.log('Updated List',updatedList)