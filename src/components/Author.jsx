export const Author = (props) => {
  
  return (
    <div className="author-item">
      <h4>{props.title}</h4>
      <h5>{props.subTitle}</h5>
      <img className="author-img" src={props.pic} alt="Фото автора" />
      <p>{props.text}</p>
      <button>{props.btntxt}</button>
    </div>
  )
}