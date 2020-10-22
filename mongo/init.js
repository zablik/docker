db.createUser({
    user: 'zablik1',
    pwd: 'zablikpass',
    roles: [
        {
            role: "readWrite",
            db: "raceplace"
        }
    ]
})