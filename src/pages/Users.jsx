import { users } from '../data/users';

function Users() {
  const viewUser = (user) => {
    alert(`Viewing ${user.name}`);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="header-content">
          <div className="logo">UM</div>

          <div>
            <h1>User Management</h1>
            <p>Engineering Portal</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="intro">
          <h2>Users</h2>

          <p>Search and manage users with access to the platform.</p>
        </section>

        <section className="search-card">
          <span className="search-label">Search users</span>

          <input type="text" placeholder="Search by name or role..." />

          <div className="result-count">{users.length} users found</div>
        </section>

        <section className="users">
          {users.map((user) => (
            <div className="user-card">{/* existing user card markup */}</div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Users;
