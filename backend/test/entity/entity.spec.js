import { expect } from 'chai'
import { describe, it } from 'mocha'
import Song from '../../entity/Song.js'

// Escribiendo un test

describe('testing class Song', () => {
  // Setup classs and instace
  const song = new Song({
    title: 'title',
    uri: 'url',
    duration: 'duration',
    image: 'image',
    idArtist: 'idArtist',
    idGenre: 'idGenre'
  })

  it('Should is not null', () => {
    expect(song).to.not.equal(null)
  })

  it('Should have a title', () => {
    expect(song._title).to.equal('title')
  })

  it('Should return a number', () => {
    expect(song.returnNumber()).to.equal(5)
  })
})
