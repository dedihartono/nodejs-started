

// // config env
// const result = dotenv.config();

// if (result.error) {
//   throw result.error;
// }

// console.log(result.parsed);

// const app = express();
// // default port to listen
// const port = process.env.PORT || 5050;
// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // DB Config
// // import { mongoURI } from "./config/src/keys" as db;

// // Connect to MongoDB
// // mongoose
// //   .connect(db, { useNewUrlParser: true })
// //   .then(() => console.log("MongoDB Connected"))
// //   .catch((err) => console.log(err));

// // define a route handler for the default home page
// app.get("/", (req, res) => {
//   res
//     .json({
//       data: "Welcome to NodeJS and TypeScript",
//       errors: [],
//       messages: [],
//       status: true
//     })
//     .status(200);
// });

// // start the Express server
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });
