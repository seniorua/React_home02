import { Link } from "./Link";
import { linkObj } from "../constants/HeaderLinks";

export const Header = () => {
  return (
    <header>
      <nav>
        {
          linkObj.map(item =>{
            return (
              <Link 
                key={item.name} 
                name={item.name} 
                link={item.href} 
              />
            )
          })
        }
      </nav>
    </header>
  )
}
