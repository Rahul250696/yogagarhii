"use client"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import EarlyBirdPopup from "./EarlyBirdPopup"
import StickyContactButton from "./StickyContactButton"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <EarlyBirdPopup />
            <StickyContactButton />
        </div>
    )
}
