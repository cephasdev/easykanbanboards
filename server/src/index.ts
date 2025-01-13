import express from "express";
import cors from "cors";
import { schema } from "./graphql/schema";
import { root } from "./graphql/resolvers";
import { createHandler } from "graphql-http/lib/use/express";
import expressPlayground from "graphql-playground-middleware-express";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(helmet());

const corsOptions = {
  origin: "http://localhost:5173", // TODO: Move to a environment-specific .env file.
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
  "/graphql",
  createHandler({
    schema,
    rootValue: root,
  })
);

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
