import { useState, useEffect } from 'react';

import { Link } from 'components';
import { userService } from 'services';

export default Index;

function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
      <div>
        <h1>Benutzer</h1>
        <Link href="/users/add" className="btn btn-sm btn-success mb-2">
          Benutzer hinzufügen
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Name</th>
              <th style={{ width: "30%" }}>Email</th>
              <th style={{ width: "30%" }}>Role</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    {user.title} {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <Link
                      href={`/users/edit/${user.id}`}
                      className="btn btn-sm btn-primary mr-1"
                    >
                      Bearbeiten
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-sm btn-danger btn-delete-user"
                      disabled={user.isDeleting}
                    >
                      {user.isDeleting ? (
                        <span className="spinner-border spinner-border-sm"></span>
                      ) : (
                        <span>Löschen</span>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            {!users && (
              <tr>
                <td colSpan="4" className="text-center">
                  <div className="spinner-border spinner-border-lg align-center"></div>
                </td>
              </tr>
            )}
            {users && !users.length && (
              <tr>
                <td colSpan="4" className="text-center">
                  <div className="p-2">Keine Benutzer zum Anzeigen</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}
