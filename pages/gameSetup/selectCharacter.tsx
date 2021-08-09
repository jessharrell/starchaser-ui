import getCharacters from "../api/characterAPI";
import {useEffect, useState} from "react";
import Link from "next/link";
import styles from "../../styles/SelectCharacter.module.css";
import {getCombinedStyles} from "../../services/StyleService";
import {serverTypes} from "../../types/serverTypes";


export default function SelectCharacter() {
    const [characters, setCharacter] = useState<serverTypes.Character[]>([] );
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);

    useEffect(() => {
        getAllCharacters();
    }, []);

    const getAllCharacters = () => {
        getCharacters().then((charactersResponse) => {
            if(charactersResponse.hasRetrievedData) {
                setCharacter(charactersResponse.allCharacters);
            }
            else{
                setError(true);
            }
            setLoading(false);
        });
    };

    if (isLoading) {
        return <div className={styles.container}><p>Loading Characters...</p></div>;
    }
    else {
        if (hasError) {
            return (
                <div className={getCombinedStyles(styles.container, styles.flexVertical)}>
                    <p>Game is Broken</p>
                    <Link href="/">
                        <a className={styles.clickable}>Restart</a>
                    </Link>
                </div>
            )
        }
        return (
            <div className={getCombinedStyles(styles.container, styles.flexHorizontal)}>
                { characters.map(character =>
                    {
                        return
                            <div className={styles.characterCard}>
                                <h2>{character.name}</h2>
                            </div>
                    }
                )}
            </div>
        )
    }
}
