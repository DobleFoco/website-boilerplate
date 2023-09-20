import { Header } from "../components/ui/Header"
import { Dbf } from "../components/modules/Dbf"
import { Title } from "../components/fragments/Title"

export const Landing = () => {
    return (
        <> 
            <Header small={ false }/>
            <main>
                <Dbf />
                {/* <Title text='Main Title' small={ false }/> */}
            </main>
        </>
    )
}
