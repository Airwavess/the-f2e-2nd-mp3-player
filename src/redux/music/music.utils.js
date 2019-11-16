export const nextMusic = (musics, current) => {
  const index = musics.findIndex(music => music.name === current)

  if (index !== musics.length - 1) {
    return {
      current: musics[index + 1].name,
      time: musics[index + 1].time
    }
  }

  return {
    current: musics[index].name,
    time: musics[index].time
  }
}

export const previousMusic = (musics, current) => {
  const index = musics.findIndex(music => music.name === current)

  if (index !== 0) {
    return {
      current: musics[index - 1].name,
      time: musics[index - 1].time
    }
  }

  return {
    current: musics[index].name,
    time: musics[index].time
  }
}
