/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:iwoIU0zEZT6f@ep-steep-sunset-a5b8pkqj.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };
  