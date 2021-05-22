export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Name Default'}</strong>
      <p>{props.repository.description ?? 'Description Default'}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  )
}
