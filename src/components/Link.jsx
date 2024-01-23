export const Link = ({name = 'Menu', link = '/home'}) => {

  return(
    <a href={link}>{name}</a>
  );
}