export const Author = (props) => {
  
  return (
    <div className="author-item">
      <div className="author-item-inner">
        <h3>{props.title}</h3>
        <h5>{props.subTitle}</h5>
        <img className="author-img" src={props.pic} alt="Фото автора" />
        <p>{props.text}</p>
      </div>
      <button>{props.btntxt}</button>
    </div>
  )
}