export namespace serverTypes{
     export interface Planet {
        id: number,
        name: string,
        description: string
    }

    export interface Character {
        id: number,
        name: string,
        health: number,
        bio: string,
        planet: Planet
    }
}