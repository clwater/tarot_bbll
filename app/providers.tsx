'use client';
// app/providers.tsx

import {NextUIProvider} from '@nextui-org/react'
import {useRouter} from 'next/navigation'

export function Providers({children}: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <NextUIProvider navigate={router.push}>
            <main className={"dark"}>
                {children}
            </main>
        </NextUIProvider>
)
}