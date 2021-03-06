export interface LanguageCodes {
    id?: string
    en?: string
}

export type Dictionary<T> = { [x in keyof T]: LanguageCodes }

export const diksio = {
    get: <TDictionary>(dictionary: Dictionary<TDictionary>, key: keyof TDictionary, lang: keyof LanguageCodes): string | undefined => {
        var value = dictionary[key]
        if (value) {
            const languages = value
            if (languages) {
                return languages[lang]
            }
        }

        return undefined
    }
}