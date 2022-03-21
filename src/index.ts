export interface Languages {
    id?: string
    en?: string
}

export type Dictionary<T> = { [x in keyof T]: Languages }

export const diksio = {
    get: <TDictionary>(key: keyof TDictionary, lang: keyof Languages, dictionary: TDictionary): string | undefined => {
        var value = dictionary[key]
        if (value) {
            const languages = value as Languages
            if (languages) {
                return languages[lang]
            }
        }

        return undefined
    }
}