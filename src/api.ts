import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { stringify, ParsedUrlQuery } from "querystring";

const apiURL = `https://api.hsmsoftware.com/v1/`

async function req({ cat, endpoint, params, config }: { 
    cat: string; 
    endpoint: string; 
    params?: ParsedUrlQuery; 
    config?: AxiosRequestConfig<any>;
}): Promise<AxiosResponse<any>> {
    let url = `${apiURL}${cat}/${endpoint}`
    if(params) {
        for (const [key, val] of Object.entries(params)) {
            if(!val)
                throw new Error(`Param \`${key}\` of endpoint \`${endpoint}\` is undefined`)
        }
        url += `?${stringify(params, '&', '=')}`
    }
    
    const res = await axios.get(url, config)
    return res
}

// --Random

/**
 * Random husam picture urls. (Husam is a bird, Instagram: kushusam) 
 * @returns Picture of husam or url to picture
 * 
 * ```ts
 * // Usage:
 * const husamPicture = await husam();
 * ```
 * see {@link https://api.hsmsoftware.com/v1/random/husam | HSMApi Random Husam}
 */
export async function husam(raw: boolean): Promise<AxiosResponse<string> | AxiosResponse<ArrayBufferConstructor>> {
    if(raw === true) {
        const res = await req({ 
            cat: `random`, 
            endpoint: `husam`,
            params: {
                raw: String(Number(raw))
            },
            config: { responseType: 'arraybuffer' }
        })
        
        return res.data
    } else {
        const res = await req({ 
            cat: `random`, 
            endpoint: `husam`
        })
        return res.data.husam
    }
}

/**
 * Random bird facts!
 * @returns bird fact
 * 
 * ```ts
 * // Usage:
 * const fact = await birdFacts();
 * ```
 * see {@link https://api.hsmsoftware.com/v1/random/birdfacts | HSMApi Random Bird Facts}
 */
export async function birdFacts(): Promise<AxiosResponse<string>> {
    const res = await req({ 
        cat: `random`, 
        endpoint: `birdfacts`
    })
    return res.data.fact
}

/**
 * Random shower thoughts!
 * @returns thought 
 * 
 * ```ts
 * // Usage:
 * const thought = await showerThoughts();
 * ```
 * see {@link https://api.hsmsoftware.com/v1/random/shower | HSMApi Random Shower Thoughts}
 */
export async function showerThoughts(): Promise<AxiosResponse<string>> {
    const res = await req({ 
        cat: `random`, 
        endpoint: `shower`
    })
    return res.data.thought
}

// --Types

/**
 * A text to morse converter.
 * @returns morse code
 * 
 * ```ts
 * // Usage:
 * const morse = await morseCode('SOS');
 * ```
 * see {@link https://api.hsmsoftware.com/v1/types/morse?text=hsmapi | HSMApi Morse Converter}
 */
export async function morseCode(text: string): Promise<AxiosResponse<string>> {
    const res = await req({ 
        cat: `types`, 
        endpoint: `morse`, 
        params: {
            text: text
        }
    })
    return res.data.morseCode
}

/**
 * Write the text mockingly.
 * @returns mocking text
 * 
 * ```ts
 * // Usage:
 * const mockedText = await mock('Im the best');
 * ```
 * see {@link https://api.hsmsoftware.com/v1/types/mock?text=Im%20the%20best | HSMApi Mocking Text}
 */
export async function mock(text: string): Promise<AxiosResponse<string>> {
    const res = await req({ 
        cat: `types`, 
        endpoint: `mock`, 
        params: {
            text: text
        }
    })
    return res.data.mock
}

/**
 * Convert your text to super script text.
 * @returns super script text
 * 
 * ```ts
 * // Usage:
 * const scr = await superScript('HSMApi');
 * ```
 * see {@link https://api.hsmsoftware.com/v1/types/super?text=HSMApi | HSMApi SuperScript Text}
 */
export async function superScript(text: string): Promise<AxiosResponse<string>> {
    const res = await req({ 
        cat: `types`, 
        endpoint: `super`, 
        params: {
            text: text
        }
    })
    return res.data.super
}

/**
 * Make your text struck.
 * @returns struck text
 * 
 * ```ts
 * // Usage:
 * const strucked = await struck('HSMApi');
 * ```
 * see {@link https://api.hsmsoftware.com/v1/types/struck?text=HSMApi | HSMApi Struck Text}
 */
export async function struck(text: string): Promise<AxiosResponse<string>> {
    const res = await req({ 
        cat: `types`, 
        endpoint: `struck`, 
        params: {
            text: text
        }
    })
    return res.data.struck
}

// --Image

/**
 * Make your own drake meme.
 * @returns ArrayBuffer image
 * 
 * ```ts
 * // Usage:
 * const image = await drake('Other API', 'HSMApi');
 * ```
 * see {@link https://api.hsmsoftware.com/v1/image/drake?text1=Other%20API&text2=HSMApi | HSMApi Drake Meme}
 */
export async function drake(text1: string, text2: string): Promise<AxiosResponse<string>> {
    const res = await req({ 
        cat: `image`,
        endpoint: 'drake', 
        params: {
            text1: text1,
            text2: text2
        },
        config: {responseType: 'arraybuffer'}
    })
    return res.data
}

// --Utility
/**
 * The counter with the entered name increases by 1 each time it is run.
 * @returns count
 * 
 * ```ts
 * // Usage:
 * const count = await counter('HSM');
 * ```
 * see {@link https://api.hsmsoftware.com/v1/count/HSM | HSMApi Counter}
 */
export async function counter(text: string): Promise<AxiosResponse<number>> {
    const res = await req({ 
        cat: `counter`, 
        endpoint: `${text}`, 
    })
    return res.data.count
}