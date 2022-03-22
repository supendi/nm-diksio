import { Dictionary, diksio } from "..";

describe("get test", () => {
    interface Registrant {
        fullName: string,
        email: string,
        password: string
    }

    const registrationDictionary: Dictionary<Registrant> = {
        fullName: {
            en: "Full Name",
            id: "Nama Lengkap"
        },
        email: {
            en: "Email",
            id: "Email"
        },
        password: {
            en: "Password",
            id: "Kata Kunci"
        }
    }

    it("Should return correct english fullname", () => {

        const actual = diksio.get(registrationDictionary, "fullName", "en")
        const expected = "Full Name"
        expect(actual).toEqual(expected)
    })

    it("Should return correct indonesian fullname", () => {

        const actual = diksio.get(registrationDictionary, "fullName", "id")

        const expected = "Nama Lengkap"
        expect(actual).toEqual(expected)
    })

    it("Should return correct english email", () => {

        const actual = diksio.get(registrationDictionary, "email", "en")

        const expected = "Email"
        expect(actual).toEqual(expected)
    })

    it("Should return correct indonesian email", () => {

        const actual = diksio.get(registrationDictionary, "email", "id")

        const expected = "Email"
        expect(actual).toEqual(expected)
    })

    it("Should return correct english password", () => {

        const actual = diksio.get(registrationDictionary, "password", "en")

        const expected = "Password"
        expect(actual).toEqual(expected)
    })
    it("Should return correct indonesian password", () => {

        const actual = diksio.get(registrationDictionary, "password", "id")

        const expected = "Kata Kunci"
        expect(actual).toEqual(expected)
    })
})
