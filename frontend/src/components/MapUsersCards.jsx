import { useEffect, useState } from 'react';
import { getUsers } from '../api/getUsers';
import UsersCards from '../components/UsersCards';

function MapUsersCards() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="cards-container">
            {users.map(user => <UsersCards user={user} key={user.id} />)}
        </div>

    )
}

export default MapUsersCards;