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

        const actual = diksio.get("fullName", "en", registrationDictionary)

        const expected = "Full Name"
        expect(actual).toEqual(expected)
    })

    it("Should return correct indonesian fullname", () => {

        const actual = diksio.get("fullName", "id", registrationDictionary)

        const expected = "Nama Lengkap"
        expect(actual).toEqual(expected)
    })

    it("Should return correct english email", () => {

        const actual = diksio.get("email", "en", registrationDictionary)

        const expected = "Email"
        expect(actual).toEqual(expected)
    })

    it("Should return correct indonesian email", () => {

        const actual = diksio.get("email", "id", registrationDictionary)

        const expected = "Email"
        expect(actual).toEqual(expected)
    })

    it("Should return correct english password", () => {

        const actual = diksio.get("password", "en", registrationDictionary)

        const expected = "Password"
        expect(actual).toEqual(expected)
    })
    it("Should return correct indonesian password", () => {

        const actual = diksio.get("password", "id", registrationDictionary)

        const expected = "Kata Kunci"
        expect(actual).toEqual(expected)
    })
})
