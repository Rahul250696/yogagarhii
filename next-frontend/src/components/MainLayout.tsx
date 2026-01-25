"use client"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import EarlyBirdPopup from "./EarlyBirdPopup"
import StickyContactButton from "./StickyContactButton"
import MasterClassPopup from "./MasterClassPopup"
import PartnershipsSection from "./home/PartnershipsSection"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <PartnershipsSection />
            <Footer />
            <EarlyBirdPopup />
            <MasterClassPopup />
            <StickyContactButton />
        </div>
    )
}
