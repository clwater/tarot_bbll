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
    console.log('getGuas')
    const {data, error}: { data: GuaSimpleEntity[] | null, error: any } = await supabase.from('zy')
        .select('id, name, image, name_detail')
    // console.log(data)

    if (error) {
        return []
    }else {
        return data
    }

}