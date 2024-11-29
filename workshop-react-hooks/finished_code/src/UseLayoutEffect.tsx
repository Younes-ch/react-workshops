import React, { useEffect, useLayoutEffect, useState } from 'react'

const userIds = [1, 2];

function UseLayoutEffect() {
    const [userId, setUserId] = useState(userIds[0])
    const [isAdmin, setIsAdmin] = useState(true);

    useLayoutEffect(() => {
        setIsAdmin(userId === userIds[0]);
    }, [userId]);

    const handleChange = () => {
        const otherId = userIds.find((id) => id !== userId);
        setUserId(otherId);
    }

  return (
      <div>
          <p>UserId: {userId}</p>
          <p>Admin: {isAdmin ? 'true' : 'false'}</p>
          <button onClick={handleChange}>Change User</button>
    </div>
  )
}

export default UseLayoutEffect