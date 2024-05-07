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
    // console.log(data)

    if (error) {
        return []
    }else {
        return data
    }

}

export async function getGua(guaIndex: number) {
    // @ts-ignore
    const {data, error}: { data: GuaEntity | null, error: any } = await supabase.from('zy')
        .select('id, name, image, name_detail')
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