import React from 'react'

type Cubes = {
  color: string
  quantity: number
}

export const Day2: React.FC<{ input: string }> = ({ input }) => {
  const redCubes = 12
  const greenCubes = 13
  const blueCubes = 14

  const groupBy = (cubes: Cubes[]) =>
    Object.entries(Object.groupBy(cubes, (e) => e.color))

  const getMax = (cubes: Cubes[]) =>
    cubes.reduce((max, v) => (v.quantity > max.quantity ? v : max), {
      quantity: 0,
    }).quantity

  const cubeSet = input
    ? input
        .split('\n')
        .filter((line) => line.length != 0)
        .map((line) => Object.assign({}, line.split(':')))
        .map((splittedline) => ({
          game: parseInt(splittedline[0].replace(/\D/g, '')),
          cubes: splittedline[1]
            .split(';')
            .flatMap((set) => set.split(','))
            .map((cubes) => cubes.trim().split(' ').reverse())
            .map((cubes) => ({
              color: cubes[0],
              quantity: parseInt(cubes[1]),
            })),
        }))
    : []

  const cubes = cubeSet
    .map((game) => ({
      ...game,
      cubes: groupBy(game.cubes).map((cubes) => ({
        color: cubes[0],
        max: getMax(cubes[1]),
      })),
    }))
    .map((game) => ({
      ...game,
      cubes: Object.fromEntries(game.cubes.map((e) => [e.color, e.max])),
    }))

  const result1 = cubes
    .filter(
      (game) =>
        game.cubes.red <= redCubes &&
        game.cubes.blue <= blueCubes &&
        game.cubes.green <= greenCubes
    )
    .reduce((a, v) => a + v.game, 0)

  const result2 = cubes
    .map((game) => game.cubes.red * game.cubes.blue * game.cubes.green)
    .reduce((a, v) => a + v, 0)

  return (
    <div>
      <h2>--- Day 2: Cube Conundrum ---</h2>
      <p>
        Result1: {result1} Result2: {result2}
      </p>
    </div>
  )
}
