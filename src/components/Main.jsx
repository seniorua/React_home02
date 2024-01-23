import { authorCards } from '../constants/DataForAuthors'
import { Author } from './Author'
export const Main = () => {
  return (
    <main>
      <>
        <h2>Авторы:</h2>
        <div className='author-list'>
        {
          authorCards.map(item => {
            return (
              <Author
                key={item.title}
                title={item.title}
                subTitle={item.subTitle}
                pic={item.pic}
                text={item.text}
                btntxt={item.btntxt}
              />
            )
          })
        }
        </div>
      </>
    </main>
  )
}