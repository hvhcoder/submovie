import Header from "@/components/layout/Header";

export default function MainLayouy({children}:{children:React.ReactNode}) {
    return (
        <div>
            <Header></Header>
            <div className="mt-2 py-2 w-full container">
                {children}
            </div>
        </div>
    )
}