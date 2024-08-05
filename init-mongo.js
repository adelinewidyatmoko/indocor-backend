db.createUser({
    user: "iccp",
    pwd: "iccpform",
    roles: [
      {
        role: "root",
        db: "admin"
      }
    ]
  });
  