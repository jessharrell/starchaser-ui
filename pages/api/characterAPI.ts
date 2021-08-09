import {serverTypes} from "../../types/serverTypes";

interface GetAllCharacterResponse {
    hasRetrievedData: boolean,
    allCharacters: serverTypes.Character[]
}

export default async function getCharacters (): Promise<GetAllCharacterResponse> {

    const characters = await fetch(`http://localhost:5000/Character`)
                            .then(response => {
                                if (response.ok) {
                                    return response.json()
                                }
                                return undefined;
                            })
                            .catch((_) =>{ return undefined});

    if(!characters)
    {
        return {
           hasRetrievedData: false,
           allCharacters: []
        }
    }

    return {
        hasRetrievedData: true,
        allCharacters: characters
    }
}