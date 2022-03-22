export interface LanguageCodes {
    id?: string
    en?: string
}

export type Dictionary<T> = { [x in keyof T]: LanguageCodes }

export const diksio = {
    get: <TDictionary>(dictionary: TDictionary, key: keyof TDictionary, lang: keyof LanguageCodes): string | undefined => {
        var value = dictionary[key]
        if (value) {
            const languages = value as LanguageCodes
            if (languages) {
                return languages[lang]
            }
        }

        return undefined
    }
}