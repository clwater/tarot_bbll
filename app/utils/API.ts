'use client';


import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is not defined");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined");

}

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);



export async function getGuas() {
    const {data, error}: { data: GuaSimpleEntity[] | null, error: any } = await supabase.from('zy')
        .select('id, name,index,  image, name_detail')

    if (error) {
        return []
    }else {
        return data
    }

}

export async function getGua(guaIndex: number) {
    // @ts-ignore
    const {data, error}: { data: YaoEntity | null, error: any } = await supabase.from('zy')
        .select('id, name, image, name_detail, desc_detail')
        .eq('index', guaIndex)

    // console.log(getGua)

    if (error) {
        return {}
    }else {
        // @ts-ignore
        if (data != null && data[0] != null){
            // @ts-ignore
            return data[0]
        }else {
            return {}
        }
    }
}

export async function getGuaExplain(guaIndex: number) {
    const {data, error}: { data: GuaExplainsEntity[] | null, error: any } = await supabase.from('zy_gua_explain')
        .select('*')
        .eq('gua_index', guaIndex)

    if (error) {
        return []
    }else {
        return data
    }
}

export async function getGuaExplainItem(guaIndex: number) {
    const {data, error}: { data: GuaExplainsItemEntity[] | null, error: any } = await supabase.from('guas_explain_item')
        .select('*')
        .eq('gua_index', guaIndex)
    // console.log(data)

    if (error) {
        return []
    }else {
        return data
    }
}

export async function getYao(guaIndex: number) {
    const {data, error}: { data: YaoEntity[] | null, error: any } = await supabase.from('zy_yao')
        .select('*')
        .eq('gua_index', guaIndex)
    // console.log(data)

    if (error) {
        return []
    }else {
        return data
    }
}

export async function getYaoExplain(guaIndex: number) {
    const {data, error}: { data: YaoExplainsEntity[] | null, error: any } = await supabase.from('zy_yao_explain')
        .select('*')
        .eq('gua_index', guaIndex)
    // console.log(data)

    if (error) {
        return []
    }else {
        return data
    }
}

export async function getTarotSimple() {
    const {data, error}: { data: TarotSimpleEntity[] | null, error: any } = await supabase.from('tarot')
        .select('index, type, name, image_small, suit')
    if (error) {
        return []
    }else {
        return data
    }
}


export async function getTarots(cardIds: number[]) {
    const {data, error}: { data: TarotEntity[] | null, error: any } =  await supabase.from('tarot')
        .select('*')
        .in('index', cardIds)

    // console.log(data)
    if (error) {
        return []
    }else {
        return data
    }
}


export async function getTarotData(index: number) {
    const {data, error}: { data: TarotEntity[] | null, error: any } =  await supabase.from('tarot')
        .select('*')
        .eq('index', index)

    if (error) {
        return {}
    }else {
        // @ts-ignore
        if (data != null && data[0] != null){
            // @ts-ignore
            return data[0]
        }else {
            return {}
        }
    }
}

export async function getTarotExplain(index: number) {
    const {data, error}: { data: TarotExplainEntity[] | null, error: any } = await supabase.from('tarot_explain')
        .select('*')
        .eq('tarot_index', index)

    if (error) {
        return []
    }else {
        return data
    }
}