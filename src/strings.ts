export function compare(s1: string, s2: string): number {
    if (!s1 && !s2) {
        return 0;
    }
    if (!s1) {
        return -1;
    }
    if (!s2) {
        return 1;
    }
    return s1.toLowerCase().localeCompare(s2.toLowerCase());
}

export function search(s: string, term: string): number {
    if (!s) {
        return -1;
    }
    if (!term || term === "") {
        return 0;
    }
    return s.toLowerCase().indexOf(term.toLowerCase());
}