export function getCombinedStyles(...styles: string[]) : string {
    return styles.reduce((totalStyle, currentStyle) => currentStyle + ' ' + totalStyle).trim();
}