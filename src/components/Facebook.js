import profiles from '../data/berlin.json';

export function Facebook() {
  return (
    <div>
      <button
        onClick={profiles.filter((profiles) => profiles.country === 'England')}
      >
        All
      </button>
      <button>England</button>
      <button>USA</button>
      <button>Malaysia</button>
      <button>Germany</button>
      {profiles.map((profile) => (
        <div>
          <img src={profile.img} alt="profile pic"></img>

          <p>
            <strong>First Name: </strong>
            <span>{profile.firstName}</span>
          </p>
          <p>
            <strong>Last Name: </strong>
            <span>{profile.lastName}</span>
          </p>
          <p>
            <strong>Country: </strong>
            <span>{profile.country}</span>
          </p>
          <p>
            <strong>Type: </strong>
            <span>{profile.isStudent === true ? 'Student' : 'Teacher'}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
