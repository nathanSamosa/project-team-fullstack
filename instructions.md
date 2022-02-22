## Setting up

- One team member must fork the repository and ensure each team member has access to contribute to the fork.
- Other team members will *clone* that fork. All work will be pushed to the single forked repository. At the end of the project, you can fork the fork so everybody has the finished project in their personal github accounts.
- One team member must create a pull request to merge this `scaffolded` branch into the `main` branch.

Take a little bit of time to familiarise yourself with the project structure - this exercise has both a front-end React app (`src/client/`) *and* a back-end express API (`src/server/`) in it.

Note: Each team member must create their own databases, development environment databases are never usually shared.

1. **Make a copy** of `.env.example` and rename it to `.env`
2. Edit the `DATABASE_URL` variable in `.env`, swapping `YOUR_DATABASE_URL` for the URL of the database you just created. Leave `?schema=prisma` at the end.
3. Edit the `SHADOW_DATABASE_URL` variable in `.env`, swapping `YOUR_SHADOW_DATABASE_URL` for the URL of a shadow database you created in an earlier exercise. Leave `?schema=shadow` at the end.
4. Run `npm ci` to install dependencies.
5. Run `npx prisma migrate reset` to execute the database migration. Press `y` when it asks if you're sure.

## Running the app
- Run the app with `npm start` - this will open a React app in your browser *and* run the express server. The server will run on port `4000`, this can be changed in the server code if you wish.
