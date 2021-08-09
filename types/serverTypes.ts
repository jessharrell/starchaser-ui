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
        biography: string,
        planet: Planet
    }
}