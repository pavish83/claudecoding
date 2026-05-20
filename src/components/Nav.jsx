import ToggleTheme from './ToggleTheme';

function Nav({ cast, onChoice }) {
  return (
    <nav className="container">
      <ul>
        <li><a href="#"><img style={{ height: '50px' }} src="images/logo_bug_stargazers.svg" alt="Stargazers Logo" /></a></li>
        <li><strong>Stargazers</strong></li>
      </ul>
      <ul>
        <li><ToggleTheme /></li>
        <li>
          <details className="dropdown">
            <summary style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cast</summary>
            <ul dir="rtl" style={{ fontSize: '0.8rem' }}>
              {cast.map(member => (
                <li key={member.id}>
                  <a href="#" onClick={() => { onChoice(member) }}>{member.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;