import '../App.css';

function Dashboard() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-content">
          <div className="logo">EP</div>

          <div>
            <h1>Engineering Portal</h1>
            <p>Internal tools</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="intro">
          <h2>Dashboard</h2>
          <p>Select an area of the portal to continue.</p>
        </section>

        <section className="dashboard-card">
          <h3>User Management</h3>

          <p>View and manage users with access to the platform.</p>

          <a href="/users">Open User Management</a>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
